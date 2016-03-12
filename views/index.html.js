import {
  default as React,
} from "react";

import {
  WebpackScriptEntry,
  WebpackStyleEntry,
} from "reacthtmlpack/lib/entry";

export default (
  <html>
    <head>
      <title>Hello World</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="UTF-8" />
      <WebpackStyleEntry
        chunkName="client"
        chunkFilepath="../scripts/client.js"
        configFilepath="../Client.webpackConfig.js"
      />

    </head>
    <body>
      <div id="react-container" />
      <WebpackScriptEntry
        chunkName="client"
        chunkFilepath="../scripts/client.js"
        configFilepath="../Client.webpackConfig.js"
      />
    </body>
  </html>
);
