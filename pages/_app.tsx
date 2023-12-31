import React, {useState, useEffect} from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
