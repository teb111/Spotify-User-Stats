import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { token } from "./spotify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import TopArtistsScreen from "./screens/TopArtistsScreen";
import TopTracksScreen from "./screens/TopTracksScreen";
import TopPlaylistsScreen from "./screens/TopPlaylistsScreen";
import TrackInfoScreen from "./screens/TrackInfoScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import ArtistScreen from "./screens/ArtistScreen";
import RecentlyPlayedScreen from "./screens/RecentlyPlayedScreen";
import NewReleasesScreen from "./screens/NewReleasesScreen";

export const theme = {
  colors: {
    background: "#181818",
    color: "#9b9b9b",
    nav: "#000000ed",
    logoColor: "#075b25",
    textColor: "#ffffffeb",
  },
};

function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(token);
  }, [accessToken]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          {(!accessToken || accessToken === null || "") && <LoginScreen />}
          <Route path="/" component={ProfileScreen} exact />
          <Route path="/topartists" component={TopArtistsScreen} exact />
          <Route path="/toptracks" component={TopTracksScreen} exact />
          <Route path="/topplaylists" component={TopPlaylistsScreen} exact />
          <Route path="/track/:id" component={TrackInfoScreen} exact />
          <Route path="/playlist/:id" component={PlaylistScreen} exact />
          <Route path="/artist/:id" component={ArtistScreen} exact />
          <Route path="/recent" component={RecentlyPlayedScreen} exact />
          <Route path="/newreleases" component={NewReleasesScreen} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
