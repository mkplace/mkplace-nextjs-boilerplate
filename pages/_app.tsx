import App from 'next/app';

import Head from 'next/head';

import Mkplace, { configure } from '@mkplace/react';

export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;

    const mkplace = configure({ endpoint: "api.mkplace.com.br", credentials: {} })

    return (
      <Mkplace {...mkplace}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Head>
          <title>Mkplace E-commerce</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://unpkg.com/react-spring-bottom-sheet@3.2.1/dist/style.css" rel="stylesheet" />

          <meta data-n-head="true" name="viewport" content="width=device-width, initial-scale=1" />
          <meta data-n-head="true" name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta data-n-head="true" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes" />
          <meta data-n-head="true" data-hid="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content="yes" />
          <meta data-n-head="true" data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="House of gamers" />
          <meta data-n-head="true" data-hid="author" name="author" content="David Silva" />
          <meta data-n-head="true" data-hid="theme-color" name="theme-color" content="#000000" />
          <meta data-n-head="true" data-hid="og:type" name="og:type" property="og:type" content="website" />
          <meta data-n-head="true" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="House of gamers" />
          <meta data-n-head="true" name="keywords" content="gamers, produtos, games, play, pc, mobile, ps4, stream, game play, ps3, playstation, xbox, razer, xbox" />
          <meta data-n-head="true" data-hid="og:title" property="og:title" content="House of gamers" />
          <meta data-n-head="true" data-hid="og:description" property="og:description" content="House of gamers - Primeiro marketplace voltado para o público gamer do Brasil" />
          <meta data-n-head="true" data-hid="description" name="description" content="House of gamers - Primeiro marketplace voltado para o público gamer do Brasil" />

          <style>
            {`body {
              margin: 0px;
              padding: 0;
              font-family: Ubuntu;
            }

            [data-rsbs-header], [data-rsbs-footer] {
              padding: 0;
            }
            
              [data-rsbs-header] {
                  text-align: center;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                  box-shadow: 0 1px 0 rgba(46, 59, 66, calc(var(--rsbs-content-opacity,1) * 0.125));
                  z-index: 1;
                  padding-top: calc(20px + env(safe-area-inset-top));
              }

              [data-rsbs-footer] {
                box-shadow: 0 -1px 0 rgba(46, 59, 66, calc(var(--rsbs-content-opacity) * 0.125)),
                  0 2px 0 var(--rsbs-bg);
                overflow: hidden;
                z-index: 1;
                padding-bottom: calc(16px + env(safe-area-inset-bottom));
              }
            `}
          </style>
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Mkplace>
    );
  }
}