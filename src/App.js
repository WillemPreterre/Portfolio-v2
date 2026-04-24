import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Navbar from "./components/NavBar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./pages/Main/Main.js";
import ProjectDetail from "./pages/Projects/ProjectDetail.js";

function App() {
  return (
    <BrowserRouter>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      >
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Main />
              </main>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </GoogleReCaptchaProvider>
    </BrowserRouter>
  );
}

export default App;
