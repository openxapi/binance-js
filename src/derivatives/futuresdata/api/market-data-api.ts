/* tslint:disable */
/* eslint-disable */
/**
 * Binance Futures Data API
 * OpenAPI specification for Binance exchange - Futuresdata API
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
import type { FuturesdataGetFuturesHistDataLinkV1Resp } from '../model';
/**
 * MarketDataApi - axios parameter creator
 * @export
 */
export const MarketDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Future TickLevel Orderbook Historical Data Download Link
         * @summary Get Future TickLevel Orderbook Historical Data Download Link(USER_DATA)
         * @param {string} symbol symbol name, e.g. BTCUSDT or BTCUSD_PERP ｜
         * @param {string} dataType &#x60;T_DEPTH&#x60; for ticklevel orderbook data, &#x60;S_DEPTH&#x60; for orderbook snapshot data
         * @param {number} startTime 
         * @param {number} endTime 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        futuresdataGetFuturesHistDataLinkV1: async (symbol: string, dataType: string, startTime: number, endTime: number, timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'symbol' is not null or undefined
            assertParamExists('futuresdataGetFuturesHistDataLinkV1', 'symbol', symbol)
            // verify required parameter 'dataType' is not null or undefined
            assertParamExists('futuresdataGetFuturesHistDataLinkV1', 'dataType', dataType)
            // verify required parameter 'startTime' is not null or undefined
            assertParamExists('futuresdataGetFuturesHistDataLinkV1', 'startTime', startTime)
            // verify required parameter 'endTime' is not null or undefined
            assertParamExists('futuresdataGetFuturesHistDataLinkV1', 'endTime', endTime)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('futuresdataGetFuturesHistDataLinkV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/futures/histDataLink`;
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

            if (symbol !== undefined) {
                localVarQueryParameter['symbol'] = symbol;
            }

            if (dataType !== undefined) {
                localVarQueryParameter['dataType'] = dataType;
            }

            if (startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }

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
 * MarketDataApi - functional programming interface
 * @export
 */
export const MarketDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MarketDataApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Future TickLevel Orderbook Historical Data Download Link
         * @summary Get Future TickLevel Orderbook Historical Data Download Link(USER_DATA)
         * @param {string} symbol symbol name, e.g. BTCUSDT or BTCUSD_PERP ｜
         * @param {string} dataType &#x60;T_DEPTH&#x60; for ticklevel orderbook data, &#x60;S_DEPTH&#x60; for orderbook snapshot data
         * @param {number} startTime 
         * @param {number} endTime 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async futuresdataGetFuturesHistDataLinkV1(symbol: string, dataType: string, startTime: number, endTime: number, timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FuturesdataGetFuturesHistDataLinkV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.futuresdataGetFuturesHistDataLinkV1(symbol, dataType, startTime, endTime, timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MarketDataApi.futuresdataGetFuturesHistDataLinkV1']?.[localVarOperationServerIndex]?.url;
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
         * Get Future TickLevel Orderbook Historical Data Download Link
         * @summary Get Future TickLevel Orderbook Historical Data Download Link(USER_DATA)
         * @param {MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        futuresdataGetFuturesHistDataLinkV1(requestParameters: MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request, options?: RawAxiosRequestConfig): AxiosPromise<FuturesdataGetFuturesHistDataLinkV1Resp> {
            return localVarFp.futuresdataGetFuturesHistDataLinkV1(requestParameters.symbol, requestParameters.dataType, requestParameters.startTime, requestParameters.endTime, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
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
     * Get Future TickLevel Orderbook Historical Data Download Link
     * @summary Get Future TickLevel Orderbook Historical Data Download Link(USER_DATA)
     * @param {MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApiInterface
     */
    futuresdataGetFuturesHistDataLinkV1(requestParameters: MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request, options?: RawAxiosRequestConfig): AxiosPromise<FuturesdataGetFuturesHistDataLinkV1Resp>;

}

/**
 * Request parameters for futuresdataGetFuturesHistDataLinkV1 operation in MarketDataApi.
 * @export
 * @interface MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request
 */
export interface MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request {
    /**
     * symbol name, e.g. BTCUSDT or BTCUSD_PERP ｜
     * @type {string}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
     */
    readonly symbol: string

    /**
     * &#x60;T_DEPTH&#x60; for ticklevel orderbook data, &#x60;S_DEPTH&#x60; for orderbook snapshot data
     * @type {string}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
     */
    readonly dataType: string

    /**
     * 
     * @type {number}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
     */
    readonly startTime: number

    /**
     * 
     * @type {number}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
     */
    readonly endTime: number

    /**
     * 
     * @type {number}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof MarketDataApiFuturesdataGetFuturesHistDataLinkV1
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
     * Get Future TickLevel Orderbook Historical Data Download Link
     * @summary Get Future TickLevel Orderbook Historical Data Download Link(USER_DATA)
     * @param {MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketDataApi
     */
    public futuresdataGetFuturesHistDataLinkV1(requestParameters: MarketDataApiFuturesdataGetFuturesHistDataLinkV1Request, options?: RawAxiosRequestConfig) {
        return MarketDataApiFp(this.configuration).futuresdataGetFuturesHistDataLinkV1(requestParameters.symbol, requestParameters.dataType, requestParameters.startTime, requestParameters.endTime, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}

