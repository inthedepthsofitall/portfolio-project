import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar'; 
import '../styles/global.css';



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* Add other global components here */}
    </>
  );
};

export default MyApp;
