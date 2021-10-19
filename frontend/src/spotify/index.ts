import axios from "axios";
import { getHashParams } from "../helpers";

const EXPIRATION_TIME = 3600 * 2000; // 3600 seconds * 2000 = 2 hour in milliseconds

const date = (): string => {
  return Date.now().toString();
};

const setTokenTimestamp = () =>
  window.localStorage.setItem("spotify_token_timestamp", date());
const setLocalAccessToken = (token: string) => {
  setTokenTimestamp();
  window.localStorage.setItem("spotify_access_token", token);
};
const setLocalRefreshToken = (token: string) =>
  window.localStorage.setItem("spotify_refresh_token", token);
const getTokenTimestamp = () =>
  window.localStorage.getItem("spotify_token_timestamp");
const getLocalAccessToken = () =>
  window.localStorage.getItem("spotify_access_token");
const getLocalRefreshToken = () =>
  window.localStorage.getItem("spotify_refresh_token");

// Refresh the token
const refreshAccessToken = async () => {
  try {
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${getLocalRefreshToken()}`
    );
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

// Get access token off of query params (called on application init)
export const getAccessToken = () => {
  const { error, access_token, refresh_token } = getHashParams();

  if (error) {
    console.error(error);
    refreshAccessToken();
  }

  // If token has expired
  if (Number(Date.now()) - Number(getTokenTimestamp()) > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing...");
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();

  // If there is no ACCESS token in local storage, set it and return `access_token` from params
  if ((!localAccessToken || localAccessToken === "undefined") && access_token) {
    setLocalAccessToken(access_token);
    setLocalRefreshToken(refresh_token);
    return access_token;
  }

  return localAccessToken;
};

export const token = getAccessToken();

export const logout = () => {
  localStorage.removeItem("spotify_token_timestamp");
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_refresh_token");
  window.location.href = "http://localhost:3000/login";
};

// API CALLS ***************************************************************************************

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/users-profile/get-current-users-profile/
 */
export const getUser = () =>
  axios.get("https://api.spotify.com/v1/me", { headers });

/**
 * Get User's Followed Artists
 * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
 */
export const getFollowing = () =>
  axios.get("https://api.spotify.com/v1/me/following?type=artist", { headers });

/**
 * Get a List of Current User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-a-list-of-current-users-playlists/
 */
export const getPlaylists = () =>
  axios.get("https://api.spotify.com/v1/me/playlists", { headers });

/**
 * Get Current User's Recently Played Tracks
 * https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played/
 */
export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played", {
    headers,
  });

/**
 * Get a User's Top Artists
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 */

// Long ----- Medium --- Short

export const getTopArtistsLong = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=30&time_range=long_term",
    { headers }
  );

export const getTopArtists = () =>
  axios.get("https://api.spotify.com/v1/me/top/artists?limit=30", { headers });

export const getTopArtistsShort = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/artists?limit=30&time_range=short_term",
    {
      headers,
    }
  );

/**
 * Get a User's Top Tracks
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 *
 */

// Long ----- Medium --- Short
export const getTopTracksShort = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=short_term",
    { headers }
  );
export const getTopTracks = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=medium_term",
    {
      headers,
    }
  );
export const getTopTracksLong = () =>
  axios.get(
    "https://api.spotify.com/v1/me/top/tracks?limit=30&time_range=long_term",
    { headers }
  );

// Get a specific track
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track

export const getTrackById = (id: string) =>
  axios.get(`https://api.spotify.com/v1/tracks/${id}`, { headers });

//Get a Playlist and it's content
// https://developer.spotify.com/documentation/web-api/reference/#category-playlists

export const getPlaylistById = (id: string) =>
  axios.get(`https://api.spotify.com/v1/playlists/${id}`, { headers });

// All Data
export const getUserInfo = () =>
  axios
    .all([
      getUser(),
      getFollowing(),
      getPlaylists(),
      getRecentlyPlayed(),
      getTopArtists(),
    ])
    .then(
      axios.spread(
        (user, followedArtists, playlists, recentlyPlayed, topArtists) => ({
          user: user.data,
          followedArtists: followedArtists.data,
          playlists: playlists.data,
          recentlyPlayed: recentlyPlayed.data,
          topArtists: topArtists.data,
        })
      )
    );
