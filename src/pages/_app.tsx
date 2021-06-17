import "../styles/globals.css";
import { Global, css } from '@emotion/react'
import type { AppProps } from "next/app";
import { Normalize } from "../styles/Normalize";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={css`${Normalize}`}/>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
