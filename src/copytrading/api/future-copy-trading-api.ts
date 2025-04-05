/* tslint:disable */
/* eslint-disable */
/**
 * Binance Copy Trading API
 * OpenAPI specification for Binance exchange - Copytrading API
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
import type { CopytradingGetCopyTradingFuturesLeadSymbolV1Resp } from '../model';
// @ts-ignore
import type { CopytradingGetCopyTradingFuturesUserStatusV1Resp } from '../model';
/**
 * FutureCopyTradingApi - axios parameter creator
 * @export
 */
export const FutureCopyTradingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Futures Lead Trading Symbol Whitelist
         * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copytradingGetCopyTradingFuturesLeadSymbolV1: async (timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('copytradingGetCopyTradingFuturesLeadSymbolV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/copyTrading/futures/leadSymbol`;
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
         * Get Futures Lead Trader Status
         * @summary Get Futures Lead Trader Status(TRADE)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copytradingGetCopyTradingFuturesUserStatusV1: async (timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('copytradingGetCopyTradingFuturesUserStatusV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/copyTrading/futures/userStatus`;
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
    }
};

/**
 * FutureCopyTradingApi - functional programming interface
 * @export
 */
export const FutureCopyTradingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FutureCopyTradingApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Futures Lead Trading Symbol Whitelist
         * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async copytradingGetCopyTradingFuturesLeadSymbolV1(timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CopytradingGetCopyTradingFuturesLeadSymbolV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copytradingGetCopyTradingFuturesLeadSymbolV1(timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FutureCopyTradingApi.copytradingGetCopyTradingFuturesLeadSymbolV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Futures Lead Trader Status
         * @summary Get Futures Lead Trader Status(TRADE)
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async copytradingGetCopyTradingFuturesUserStatusV1(timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CopytradingGetCopyTradingFuturesUserStatusV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.copytradingGetCopyTradingFuturesUserStatusV1(timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['FutureCopyTradingApi.copytradingGetCopyTradingFuturesUserStatusV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * FutureCopyTradingApi - factory interface
 * @export
 */
export const FutureCopyTradingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FutureCopyTradingApiFp(configuration)
    return {
        /**
         * Get Futures Lead Trading Symbol Whitelist
         * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
         * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copytradingGetCopyTradingFuturesLeadSymbolV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CopytradingGetCopyTradingFuturesLeadSymbolV1Resp> {
            return localVarFp.copytradingGetCopyTradingFuturesLeadSymbolV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Futures Lead Trader Status
         * @summary Get Futures Lead Trader Status(TRADE)
         * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        copytradingGetCopyTradingFuturesUserStatusV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CopytradingGetCopyTradingFuturesUserStatusV1Resp> {
            return localVarFp.copytradingGetCopyTradingFuturesUserStatusV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FutureCopyTradingApi - interface
 * @export
 * @interface FutureCopyTradingApi
 */
export interface FutureCopyTradingApiInterface {
    /**
     * Get Futures Lead Trading Symbol Whitelist
     * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
     * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FutureCopyTradingApiInterface
     */
    copytradingGetCopyTradingFuturesLeadSymbolV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CopytradingGetCopyTradingFuturesLeadSymbolV1Resp>;

    /**
     * Get Futures Lead Trader Status
     * @summary Get Futures Lead Trader Status(TRADE)
     * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FutureCopyTradingApiInterface
     */
    copytradingGetCopyTradingFuturesUserStatusV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CopytradingGetCopyTradingFuturesUserStatusV1Resp>;

}

/**
 * Request parameters for copytradingGetCopyTradingFuturesLeadSymbolV1 operation in FutureCopyTradingApi.
 * @export
 * @interface FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request
 */
export interface FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request {
    /**
     * 
     * @type {number}
     * @memberof FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1
     */
    readonly recvWindow?: number
}

/**
 * Request parameters for copytradingGetCopyTradingFuturesUserStatusV1 operation in FutureCopyTradingApi.
 * @export
 * @interface FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request
 */
export interface FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request {
    /**
     * 
     * @type {number}
     * @memberof FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1
     */
    readonly recvWindow?: number
}

/**
 * FutureCopyTradingApi - object-oriented interface
 * @export
 * @class FutureCopyTradingApi
 * @extends {BaseAPI}
 */
export class FutureCopyTradingApi extends BaseAPI implements FutureCopyTradingApiInterface {
    /**
     * Get Futures Lead Trading Symbol Whitelist
     * @summary Get Futures Lead Trading Symbol Whitelist(USER_DATA)
     * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FutureCopyTradingApi
     */
    public copytradingGetCopyTradingFuturesLeadSymbolV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesLeadSymbolV1Request, options?: RawAxiosRequestConfig) {
        return FutureCopyTradingApiFp(this.configuration).copytradingGetCopyTradingFuturesLeadSymbolV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Futures Lead Trader Status
     * @summary Get Futures Lead Trader Status(TRADE)
     * @param {FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FutureCopyTradingApi
     */
    public copytradingGetCopyTradingFuturesUserStatusV1(requestParameters: FutureCopyTradingApiCopytradingGetCopyTradingFuturesUserStatusV1Request, options?: RawAxiosRequestConfig) {
        return FutureCopyTradingApiFp(this.configuration).copytradingGetCopyTradingFuturesUserStatusV1(requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}

