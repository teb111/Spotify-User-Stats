import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    header: "#0d1321",
  
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World!</h1>
    </ThemeProvider>
  );
}

export default App;
