import './global.css';
import { Oswald } from 'next/font/google';

import '@rainbow-me/rainbowkit/styles.css';

import { default as React, useEffect, useState } from 'react';

import Head from 'next/head'

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig, useProvider } from 'wagmi';
import {
  sepolia,
} from 'wagmi/chains';

const oswald = Oswald({ subsets: ['latin'] })


import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';

import { Toaster } from 'react-hot-toast';
import Script from "next/script";

import '@/DateTimePicker.css';


function MyApp({ Component, pageProps }) {

  const [availableChains, setAvailableChains] = useState([
    sepolia,
  ]);

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    availableChains,
    [
      publicProvider(),
      alchemyProvider({ apiKey: "8geS2cIqjhJTgXjZ" + "UebWKe7Gnpwh1CgC" })
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'FastDapp',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    chains
  });


  let wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient
  });

  useEffect(() => {



  }, []);

  return (
    <div data-theme="mytheme" className={oswald.className}>
      <Head>
        <meta property="og:url" content={process.env.url} />
        <meta property="og:title" content={process.env.title} />
        <meta name="og:description" content={process.env.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.title} />
        <meta name="twitter:description" content={process.env.description} />
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme()} showRecentTransactions={true}>
          <div className="h-screen">
            <Toaster position="top-right" />
            <Component {...pageProps} />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </div>
  );
}

export default MyApp;
