"use client";
import { useEffect } from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <AnimatePresence mode="wait">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <Script src="../../node_modules/preline/dist/preline.js" />
      {/* <motion.div key={router.pathname}> */}
        <Component {...pageProps} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>
      {/* </motion.div> */}
    </AnimatePresence>
  )
}
