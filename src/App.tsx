import SnackbarProvider from "components/snackbar";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "routers/routes";
import ThemeProvider from "theme";
import AppProvider from "context/AppContext";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider>
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
