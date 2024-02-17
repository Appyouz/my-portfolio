// pages/_app.js

import Home from './home'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return <Home />
    // <Component {...pageProps} />
  
}

export default MyApp;
