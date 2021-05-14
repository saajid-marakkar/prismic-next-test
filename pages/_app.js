import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Apphead from "../components/apphead"
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Apphead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
