# JavaScript / TypeScript Client for Binance API

[![npm version](https://badge.fury.io/js/@openxapi%2Fbinance.svg)](https://badge.fury.io/js/@openxapi%2Fbinance)

This API client was automatically generated by [OpenXAPI](https://github.com/openxapi/openxapi) using [OpenAPI Generator](https://openapi-generator.tech).

**Please do not edit the generated code manually.**

If you need to update the API client, please submit an issue or a PR to [OpenXAPI](https://github.com/openxapi/openxapi).

### Overview

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Installation

navigate to the folder of your consuming project and run one of the following commands.

```
npm install @openxapi/binance --save
```

### Modules

| Product | Module |
|--------|-------------|
| Spot API | `spot` |
| USD-M Futures API | `derivatives.umfutures` |
| COIN-M Futures API | `derivatives.cmfutures` |
| Options API | `derivatives.options` |
| Portfolio Margin API | `derivatives.pmargin` |
| Portfolio Margin Pro API | `derivatives.pmarginpro` |
| Futures Data API | `derivatives.futuresdata` |
| Margin API | `margin` |
| Subaccount API | `subaccount` |
| Convert API | `convert` |
| Wallet API | `wallet` |
| Copy Trading API | `copytrading` |
| Algo Trading API | `algo` |

### Usage

```typescript
import { spot, derivatives } from '@openxapi/binance';

// Create an alias for derivatives.umfutures
const { umfutures } = derivatives;

async function testSpot() {
  // Initialize the Binance API client
  const config = new spot.Configuration({
    auth: new spot.BinanceAuth({
        // get from env variables
        apiKey: process.env.BINANCE_API_KEY!,
        privateKeyPath: "/path/to/binance_api_private_key.pem", // Automatically detects RSA or Ed25519 keys
    }),
  });
  
  const apiInstance = new spot.AccountApi(config);
  const resp = await apiInstance.spotGetAccountV3({
    timestamp: Date.now(),
  });
  console.log(resp);
  console.log("resp.data.accountType:", resp.data.accountType);
}

async function testUmFutures() {
    const config = new umfutures.Configuration({
        auth: new umfutures.BinanceAuth({
            apiKey: process.env.BINANCE_API_KEY!,
            privateKeyPath: "/path/to/binance_api_private_key.pem", // Automatically detects RSA or Ed25519 keys
        }),
    });

    const apiInstance = new umfutures.MarketDataApi(config);
    const resp = await apiInstance.umfuturesGetKlinesV1({
        symbol: 'BTCUSDT',
        interval: '1h',
    });
    console.log(resp);
}

async function main() {
    await testSpot();
    await testUmFutures();
}

main().catch(console.error);
```
