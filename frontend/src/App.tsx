import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global";
import ProfileScreen from "./components/ProfileScreen";

export const theme = {
  colors: {
    background: "#181818",
    color: "#9b9b9b",
    nav: "#000",
    logoColor: "#075b25"
  
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
<    Route path="/" component={ProfileScreen} />
        </Switch>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
