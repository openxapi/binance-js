/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin Pro API
 * OpenAPI specification for Binance exchange - Pmarginpro API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setBinanceAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { APIError } from '../model';
// @ts-ignore
import type { PmarginproGetPortfolioAssetIndexPriceV1RespItem } from '../model';
// @ts-ignore
import type { PmarginproGetPortfolioCollateralRateV1RespItem } from '../model';
// @ts-ignore
import type { PmarginproGetPortfolioCollateralRateV2RespItem } from '../model';
// @ts-ignore
import type { PmarginproGetPortfolioMarginAssetLeverageV1RespItem } from '../model';
/**
 * MarketDataApi - axios parameter creator
 * @export
 */
export const MarketDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Query Portfolio Margin Asset Index Price
         * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
         * @param {string} [asset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioAssetIndexPriceV1: async (asset?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/portfolio/asset-index-price`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (asset !== undefined) {
                localVarQueryParameter['asset'] = asset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Portfolio Margin Collateral Rate
         * @summary Portfolio Margin Collateral Rate(MARKET_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioCollateralRateV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/portfolio/collateralRate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Portfolio Margin PRO Tiered Collateral Rate
         * @summary Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioCollateralRateV2: async (timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('pmarginproGetPortfolioCollateralRateV2', 'timestamp', timestamp)
            const localVarPath = `/sapi/v2/portfolio/collateralRate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required

            if (recvWindow !== undefined) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            if (timestamp !== undefined) {
                localVarQueryParameter['timestamp'] = timestamp;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            // Handle Binance authentication with API key in header and signature in query parameters
            await setBinanceAuthToObject(localVarUrlObj, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Portfolio Margin Asset Leverage
         * @summary Get Portfolio Margin Asset Leverage(USER_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioMarginAssetLeverageV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/portfolio/margin-asset-leverage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            // Handle Binance authentication with API key in header and signature in query parameters
            await setBinanceAuthToObject(localVarUrlObj, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MarketDataApi - functional programming interface
 * @export
 */
export const MarketDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MarketDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Query Portfolio Margin Asset Index Price
         * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
         * @param {string} [asset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pmarginproGetPortfolioAssetIndexPriceV1(asset?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PmarginproGetPortfolioAssetIndexPriceV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pmarginproGetPortfolioAssetIndexPriceV1(asset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.pmarginproGetPortfolioAssetIndexPriceV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Portfolio Margin Collateral Rate
         * @summary Portfolio Margin Collateral Rate(MARKET_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pmarginproGetPortfolioCollateralRateV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pmarginproGetPortfolioCollateralRateV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.pmarginproGetPortfolioCollateralRateV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Portfolio Margin PRO Tiered Collateral Rate
         * @summary Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pmarginproGetPortfolioCollateralRateV2(timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV2RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pmarginproGetPortfolioCollateralRateV2(timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.pmarginproGetPortfolioCollateralRateV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Portfolio Margin Asset Leverage
         * @summary Get Portfolio Margin Asset Leverage(USER_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pmarginproGetPortfolioMarginAssetLeverageV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PmarginproGetPortfolioMarginAssetLeverageV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pmarginproGetPortfolioMarginAssetLeverageV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.pmarginproGetPortfolioMarginAssetLeverageV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MarketDataApi - factory interface
 * @export
 */
export const MarketDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MarketDataApiFp(configuration)
    return {
        /**
         * Query Portfolio Margin Asset Index Price
         * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
         * @param {MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioAssetIndexPriceV1(requestParameters: MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioAssetIndexPriceV1RespItem>> {
            return localVarFp.pmarginproGetPortfolioAssetIndexPriceV1(requestParameters.asset, options).then((request) => request(axios, basePath));
        },
        /**
         * Portfolio Margin Collateral Rate
         * @summary Portfolio Margin Collateral Rate(MARKET_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioCollateralRateV1(options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV1RespItem>> {
            return localVarFp.pmarginproGetPortfolioCollateralRateV1(options).then((request) => request(axios, basePath));
        },
        /**
         * Portfolio Margin PRO Tiered Collateral Rate
         * @summary Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
         * @param {MarketDataApiPmarginproGetPortfolioCollateralRateV2Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioCollateralRateV2(requestParameters: MarketDataApiPmarginproGetPortfolioCollateralRateV2Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV2RespItem>> {
            return localVarFp.pmarginproGetPortfolioCollateralRateV2(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Portfolio Margin Asset Leverage
         * @summary Get Portfolio Margin Asset Leverage(USER_DATA)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pmarginproGetPortfolioMarginAssetLeverageV1(options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioMarginAssetLeverageV1RespItem>> {
            return localVarFp.pmarginproGetPortfolioMarginAssetLeverageV1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MarketDataApi - interface
 * @export
 * @interface MarketDataApi
 */
export interface MarketDataApiInterface {
    /**
     * Query Portfolio Margin Asset Index Price
     * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
     * @param {MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    pmarginproGetPortfolioAssetIndexPriceV1(requestParameters?: MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioAssetIndexPriceV1RespItem>>;

    /**
     * Portfolio Margin Collateral Rate
     * @summary Portfolio Margin Collateral Rate(MARKET_DATA)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    pmarginproGetPortfolioCollateralRateV1(options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV1RespItem>>;

    /**
     * Portfolio Margin PRO Tiered Collateral Rate
     * @summary Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
     * @param {MarketDataApiPmarginproGetPortfolioCollateralRateV2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    pmarginproGetPortfolioCollateralRateV2(requestParameters: MarketDataApiPmarginproGetPortfolioCollateralRateV2Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioCollateralRateV2RespItem>>;

    /**
     * Get Portfolio Margin Asset Leverage
     * @summary Get Portfolio Margin Asset Leverage(USER_DATA)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    pmarginproGetPortfolioMarginAssetLeverageV1(options?: RawAxiosRequestConfig): AxiosPromise<Array<PmarginproGetPortfolioMarginAssetLeverageV1RespItem>>;

}

/**
 * Request parameters for pmarginproGetPortfolioAssetIndexPriceV1 operation in MarketDataApi.
 * @export
 * @interface MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request
 */
export interface MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request {
    /**
     * 
     * @type {string}
     * @memberof MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1
     */
    readonly asset?: string
}

/**
 * Request parameters for pmarginproGetPortfolioCollateralRateV2 operation in MarketDataApi.
 * @export
 * @interface MarketDataApiPmarginproGetPortfolioCollateralRateV2Request
 */
export interface MarketDataApiPmarginproGetPortfolioCollateralRateV2Request {
    /**
     * 
     * @type {number}
     * @memberof MarketDataApiPmarginproGetPortfolioCollateralRateV2
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof MarketDataApiPmarginproGetPortfolioCollateralRateV2
     */
    readonly recvWindow?: number
}

/**
 * MarketDataApi - object-oriented interface
 * @export
 * @class MarketDataApi
 * @extends {BaseAPI}
 */
export class MarketDataApi extends BaseAPI implements MarketDataApiInterface {
    /**
     * Query Portfolio Margin Asset Index Price
     * @summary Query Portfolio Margin Asset Index Price (MARKET_DATA)
     * @param {MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public pmarginproGetPortfolioAssetIndexPriceV1(requestParameters: MarketDataApiPmarginproGetPortfolioAssetIndexPriceV1Request = {}, options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).pmarginproGetPortfolioAssetIndexPriceV1(requestParameters.asset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Portfolio Margin Collateral Rate
     * @summary Portfolio Margin Collateral Rate(MARKET_DATA)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public pmarginproGetPortfolioCollateralRateV1(options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).pmarginproGetPortfolioCollateralRateV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Portfolio Margin PRO Tiered Collateral Rate
     * @summary Portfolio Margin Pro Tiered Collateral Rate(USER_DATA)
     * @param {MarketDataApiPmarginproGetPortfolioCollateralRateV2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public pmarginproGetPortfolioCollateralRateV2(requestParameters: MarketDataApiPmarginproGetPortfolioCollateralRateV2Request, options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).pmarginproGetPortfolioCollateralRateV2(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Portfolio Margin Asset Leverage
     * @summary Get Portfolio Margin Asset Leverage(USER_DATA)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public pmarginproGetPortfolioMarginAssetLeverageV1(options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).pmarginproGetPortfolioMarginAssetLeverageV1(options).then((request) => request(this.axios, this.basePath));
    }
}

