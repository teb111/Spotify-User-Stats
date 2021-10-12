import { useState, useEffect } from "react";
import { token } from "./spotify";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";

export const theme = {
  colors: {
    background: "#181818",
    color: "#9b9b9b",
    nav: "#000",
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
      {accessToken !== null || "" ? <ProfileScreen /> : <LoginScreen />}
    </ThemeProvider>
  );
}

export default App;
