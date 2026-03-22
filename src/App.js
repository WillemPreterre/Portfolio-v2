import Navbar from "./components/Navbar";
import "./App.scss";
import Main from "./pages/Main/Main.js";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      >
        <Navbar />
        <main>
          <Main />
        </main>

        <Footer />
      </GoogleReCaptchaProvider>





      
    </>
  );
}

export default App;