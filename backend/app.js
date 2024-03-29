"use strict"
exports.__esModule = true
var path = require("path")
var cors = require("cors")
var express = require("express")
var dotenv = require("dotenv")
var cookieParser = require("cookie-parser")
var querystring = require("query-string")
var request = require("request")
var morgan = require("morgan")
//load config
dotenv.config({})
var redirect_uri = process.env.REDIRECT_URI || "http://localhost:8888/callback"
var frontend_uri = process.env.FRONTEND_URI || "http://localhost:3000"
if (process.env.NODE_ENV !== "production") {
  process.env.REDIRECT_URI = "http://localhost:8888/callback"
  process.env.FRONTEND_URI = "http://localhost:3000"
}
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = ""
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
var stateKey = "spotify_auth_state"
var app = express()
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}
// serve static files.
var VIEWS = path.resolve(__dirname, "../frontend/build")
app.use(express.static(path.resolve(__dirname, "../frontend/build")))
app.use(express.json())
app.use(cors()).use(cookieParser())
app.get("/", function (req, res) {
  res.sendFile("index.html", {
    root: VIEWS
  })
})

console.log(path.resolve(__dirname, "../frontend/build"))
//routes
app.get("/login", cors(), function (req, res) {
  console.log("Code got here")
  var state = generateRandomString(16)
  res.cookie(stateKey, state)
  var scopes =
    "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public"
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope: scopes,
        redirect_uri: redirect_uri,
        state: state
      })
  )
})
app.get("/callback", cors(), function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter
  var code = req.query.code || null
  var state = req.query.state || null
  var storedState = req.cookies ? req.cookies[stateKey] : null
  if (state === null || state !== storedState) {
    res.redirect("/#" + querystring.stringify({ error: "state_mismatch" }))
  } else {
    res.clearCookie(stateKey)
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(
            process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
          ).toString("base64")
      },
      json: true
    }
    request.post(
      "https://accounts.spotify.com/api/token",
      authOptions,
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token
          var refresh_token = body.refresh_token
          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true
          }
          // use the access token to access the Spotify Web API
          request.get(options, function (error, response, body) {
            console.log("Body is here")
          })
          // we can also pass the token to the browser to make requests from there
          res.redirect(
            frontend_uri +
              "/#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token
              })
          )
        } else {
          res.redirect("/#" + querystring.stringify({ error: "invalid_token" }))
        }
      }
    )
  }
})
app.get("/refresh_token", cors(), function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64")
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token
    },
    json: true
  }
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token
      res.send({
        access_token: access_token
      })
    }
  })
})
// app.get("/", (req, res) => {
//   res.send("This app is working");
// });
var PORT = process.env.PORT || 8888
app.listen(PORT, function () {
  return console.log("App running on port " + PORT)
})
