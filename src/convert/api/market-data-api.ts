/* tslint:disable */
/* eslint-disable */
/**
 * Binance Convert API
 * OpenAPI specification for Binance exchange - Convert API
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
import type { ConvertGetConvertAssetInfoV1RespItem } from '../model';
// @ts-ignore
import type { ConvertGetConvertExchangeInfoV1RespItem } from '../model';
/**
 * MarketDataApi - axios parameter creator
 * @export
 */
export const MarketDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Query for supported asset’s precision information
         * @summary Query order quantity precision per asset(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertGetConvertAssetInfoV1: async (timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('convertGetConvertAssetInfoV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/convert/assetInfo`;
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
         * Query for all convertible token pairs and the tokens’ respective upper/lower limits
         * @summary List All Convert Pairs
         * @param {string} [fromAsset] User spends coin
         * @param {string} [toAsset] User receives coin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertGetConvertExchangeInfoV1: async (fromAsset?: string, toAsset?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sapi/v1/convert/exchangeInfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fromAsset !== undefined) {
                localVarQueryParameter['fromAsset'] = fromAsset;
            }

            if (toAsset !== undefined) {
                localVarQueryParameter['toAsset'] = toAsset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
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
         * Query for supported asset’s precision information
         * @summary Query order quantity precision per asset(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] The value cannot be greater than 60000
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertGetConvertAssetInfoV1(timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ConvertGetConvertAssetInfoV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertGetConvertAssetInfoV1(timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.convertGetConvertAssetInfoV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Query for all convertible token pairs and the tokens’ respective upper/lower limits
         * @summary List All Convert Pairs
         * @param {string} [fromAsset] User spends coin
         * @param {string} [toAsset] User receives coin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async convertGetConvertExchangeInfoV1(fromAsset?: string, toAsset?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ConvertGetConvertExchangeInfoV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.convertGetConvertExchangeInfoV1(fromAsset, toAsset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.convertGetConvertExchangeInfoV1']?.[localVarOperationServerIndex]?.url;
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
         * Query for supported asset’s precision information
         * @summary Query order quantity precision per asset(USER_DATA)
         * @param {MarketDataApiConvertGetConvertAssetInfoV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertGetConvertAssetInfoV1(requestParameters: MarketDataApiConvertGetConvertAssetInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<ConvertGetConvertAssetInfoV1RespItem>> {
            return localVarFp.convertGetConvertAssetInfoV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Query for all convertible token pairs and the tokens’ respective upper/lower limits
         * @summary List All Convert Pairs
         * @param {MarketDataApiConvertGetConvertExchangeInfoV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        convertGetConvertExchangeInfoV1(requestParameters: MarketDataApiConvertGetConvertExchangeInfoV1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<ConvertGetConvertExchangeInfoV1RespItem>> {
            return localVarFp.convertGetConvertExchangeInfoV1(requestParameters.fromAsset, requestParameters.toAsset, options).then((request) => request(axios, basePath));
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
     * Query for supported asset’s precision information
     * @summary Query order quantity precision per asset(USER_DATA)
     * @param {MarketDataApiConvertGetConvertAssetInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    convertGetConvertAssetInfoV1(requestParameters: MarketDataApiConvertGetConvertAssetInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<ConvertGetConvertAssetInfoV1RespItem>>;

    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     * @summary List All Convert Pairs
     * @param {MarketDataApiConvertGetConvertExchangeInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    convertGetConvertExchangeInfoV1(requestParameters?: MarketDataApiConvertGetConvertExchangeInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<ConvertGetConvertExchangeInfoV1RespItem>>;

}

/**
 * Request parameters for convertGetConvertAssetInfoV1 operation in MarketDataApi.
 * @export
 * @interface MarketDataApiConvertGetConvertAssetInfoV1Request
 */
export interface MarketDataApiConvertGetConvertAssetInfoV1Request {
    /**
     * 
     * @type {number}
     * @memberof MarketDataApiConvertGetConvertAssetInfoV1
     */
    readonly timestamp: number

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof MarketDataApiConvertGetConvertAssetInfoV1
     */
    readonly recvWindow?: number
}

/**
 * Request parameters for convertGetConvertExchangeInfoV1 operation in MarketDataApi.
 * @export
 * @interface MarketDataApiConvertGetConvertExchangeInfoV1Request
 */
export interface MarketDataApiConvertGetConvertExchangeInfoV1Request {
    /**
     * User spends coin
     * @type {string}
     * @memberof MarketDataApiConvertGetConvertExchangeInfoV1
     */
    readonly fromAsset?: string

    /**
     * User receives coin
     * @type {string}
     * @memberof MarketDataApiConvertGetConvertExchangeInfoV1
     */
    readonly toAsset?: string
}

/**
 * MarketDataApi - object-oriented interface
 * @export
 * @class MarketDataApi
 * @extends {BaseAPI}
 */
export class MarketDataApi extends BaseAPI implements MarketDataApiInterface {
    /**
     * Query for supported asset’s precision information
     * @summary Query order quantity precision per asset(USER_DATA)
     * @param {MarketDataApiConvertGetConvertAssetInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public convertGetConvertAssetInfoV1(requestParameters: MarketDataApiConvertGetConvertAssetInfoV1Request, options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).convertGetConvertAssetInfoV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     * @summary List All Convert Pairs
     * @param {MarketDataApiConvertGetConvertExchangeInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public convertGetConvertExchangeInfoV1(requestParameters: MarketDataApiConvertGetConvertExchangeInfoV1Request = {}, options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).convertGetConvertExchangeInfoV1(requestParameters.fromAsset, requestParameters.toAsset, options).then((request) => request(this.axios, this.basePath));
    }
}

