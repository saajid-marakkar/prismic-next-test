import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Apphead from "../components/apphead"
import Footer from '../components/footer'
{/* <link rel="stylesheet" href="assets/css/fourthpage.css" />
            <link rel="stylesheet" href="assets/css/animation.css" />
            <script type="text/javascript" src="assets/js/colcade2.js"></script> */}
import "../public/assets/css/fourthpage.css"
import "../public/assets/css/animation.css"
import "../public/assets/css/header.css"
// import "../public/assets/js/colcade2.js"
import "../public/assets/css/slider.css"
function MyApp({ Component, pageProps }) {

  return (
    <>
    {

    }
      <Apphead />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
