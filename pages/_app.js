import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homeglobal.css'
import '../styles/global.css'


const MyApp = ({Component, pageProps}) => {
    return ( 
        <Component {...pageProps}/>
     );
}
 
export default MyApp;