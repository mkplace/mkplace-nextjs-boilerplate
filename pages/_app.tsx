import App from 'next/app';

import Head from 'next/head';

import Mkplace, { configure } from '@mkplace/react';

import 'tailwindcss/tailwind.css'

export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;

    const mkplace = configure({ endpoint: "api.mkplace.com.br", credentials: {} })

    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Head>
          <meta charSet="utf-8" />

          <title>House of gamers</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <meta name="apple-mobile-web-app-title" content="House of gamers" />

          <meta name="og:site_name" property="og:site_name" content="House of gamers" />
          <meta name="og:type" property="og:type" content="website" />
          <meta property="og:title" content="House of gamers" />
          <meta property="og:description" content="House of gamers - Primeiro marketplace voltado para o público gamer do Brasil" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="author" content="Mkplace Technology" />

          <meta name="theme-color" content="#000000" />
          <meta name="keywords" content="gamers, produtos, games, play, pc, mobile, ps4, stream, game play, ps3, playstation, xbox, razer, xbox" />
          <meta name="description" content="House of gamers - Primeiro marketplace voltado para o público gamer do Brasil" />

          <style>
            {`
              body {
                margin: 0px;
                padding: 0;
                font-family: Ubuntu;
              }
            `}
          </style>
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </>
    );
  }
}