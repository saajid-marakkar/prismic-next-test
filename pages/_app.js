import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Apphead from "../components/apphead"
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Apphead />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
