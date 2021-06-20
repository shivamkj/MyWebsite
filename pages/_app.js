import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/tailwind.css";
import "../styles/globals.css";
import "../node_modules/highlight.js/styles/tomorrow-night-bright.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
