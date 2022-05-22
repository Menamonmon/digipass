import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { SITE_CONSTANTS } from "../utils/consts";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href={SITE_CONSTANTS.GOOGLE_FONT_URL} />

          <meta name="description" content={SITE_CONSTANTS.DESCRIPTION} />

          {/* Open Graph */}
          <meta property="og:title" content={SITE_CONSTANTS.TITLE} />
          <meta property="og:url" content={SITE_CONSTANTS.HOST} />
          <meta property="og:image" content={SITE_CONSTANTS.IMAGE_URL} />
          <meta
            property="og:description"
            content={SITE_CONSTANTS.DESCRIPTION}
          />
          <meta property="og:site_name" content={SITE_CONSTANTS.TITLE} />

          {/* Twitter */}
          <meta name="twitter:card" content={SITE_CONSTANTS.IMAGE_URL} />
          <meta name="twitter:site" content={SITE_CONSTANTS.HOST} />
          <meta name="twitter:title" content={SITE_CONSTANTS.TITLE} />
          <meta
            name="twitter:description"
            content={SITE_CONSTANTS.DESCRIPTION}
          />
          <meta name="twitter:image" content={SITE_CONSTANTS.IMAGE_URL} />

          <meta
            name="facebook-domain-verification"
            content="o7yyph0r34xnt8365dmmidj7xp8z8k"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

          {/* Fonts */}
          <link rel="stylesheet" href={SITE_CONSTANTS.GOOGLE_FONT_URL} />

          {/* Environment variables */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/__ENV.js" />
        </Head>
        <body>
          <Main />
          <div id="form-modal" />
          <NextScript />

          {/**<!-- Google Tag Manager (noscript) -->**/}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W3GMC7X"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/**<<!-- End Google Tag Manager (noscript) -->**/}
        </body>
      </Html>
    );
  }
}
