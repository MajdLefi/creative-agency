"use client";
import { useEffect } from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
  <>
     <Script src="../../node_modules/preline/dist/preline.js" />
    <Component {...pageProps} />
  </>
  )
}
