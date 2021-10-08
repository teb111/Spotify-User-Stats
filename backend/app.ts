import path from "path";
import cors from "cors";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import querystring from "query-string";
import request from "request";
import history from "connect-history-api-fallback";
import morgan from "morgan";

//load config
dotenv.config({});

const redirect_uri =
  process.env.REDIRECT_URI || "http://localhost:5000/callback";
const frontend_uri = process.env.FRONTEND_URI || "http://localhost:3000";
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = (length: number) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors()).use(cookieParser());

//routes
app.get("/login", cors(), (req: Request, res: Response) => {
  console.log("Code got here");
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  const scopes =
    "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public";
  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: "code",
      client_id: process.env.CLIENT_ID,
      scope: scopes,
      redirect_uri: redirect_uri,
      state: state,
    })}`
  );
});

app.get("/callback", cors(), (req: Request, res: Response) => {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(`/#${querystring.stringify({ error: "state_mismatch" })}`);
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization: `Basic ${new (Buffer.from as any)(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      json: true,
    };

    request.post(
      "https://accounts.spotify.com/api/token",
      authOptions,
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const access_token = body.access_token;
          const refresh_token = body.refresh_token;

          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true,
          };

          // use the access token to access the Spotify Web API
          request.get(options, function (error, response, body) {
            console.log(body);
          });

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            `${frontend_uri}/#${querystring.stringify({
              access_token,
              refresh_token,
            })}`
          );
        } else {
          res.redirect(
            `/#${querystring.stringify({ error: "invalid_token" })}`
          );
        }
      }
    );
  }
});

app.get("/refresh_token", cors(), (req: Request, res: Response) => {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: `Basic ${new (Buffer.from as any)(
        `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

// app.get("/", (req, res) => {
//   res.send("This app is working");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on port 5000`));
