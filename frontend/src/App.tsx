import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { token } from "./spotify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import TopArtistsScreen from "./screens/TopArtistsScreen";

export const theme = {
  colors: {
    background: "#181818",
    color: "#9b9b9b",
    nav: "#000000ed",
    logoColor: "#075b25",
  },
};

function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(token);
    console.log(accessToken);
  }, [accessToken]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          {(!accessToken || accessToken === null || "") && <LoginScreen />}
          <Route path="/" component={ProfileScreen} exact />
          <Route path="/topartists" component={TopArtistsScreen} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
