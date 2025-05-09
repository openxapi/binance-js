/* tslint:disable */
/* eslint-disable */
/**
 * Binance Spot API
 * OpenAPI specification for Binance exchange - Spot API
 *
 * The version of the OpenAPI document: 0.3.0
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
import type { GetPayTransactionsV1Resp } from '../model';
/**
 * BinancePayHistoryApi - axios parameter creator
 * @export
 */
export const BinancePayHistoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Pay Trade History
         * @summary Get Pay Trade History
         * @param {number} timestamp 
         * @param {number} [startTime] 
         * @param {number} [endTime] 
         * @param {number} [limit] default 100, max 100
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayTransactionsV1: async (timestamp: number, startTime?: number, endTime?: number, limit?: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('getPayTransactionsV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/pay/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BinancePayHistoryApi - functional programming interface
 * @export
 */
export const BinancePayHistoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BinancePayHistoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Pay Trade History
         * @summary Get Pay Trade History
         * @param {number} timestamp 
         * @param {number} [startTime] 
         * @param {number} [endTime] 
         * @param {number} [limit] default 100, max 100
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPayTransactionsV1(timestamp: number, startTime?: number, endTime?: number, limit?: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPayTransactionsV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPayTransactionsV1(timestamp, startTime, endTime, limit, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BinancePayHistoryApi.getPayTransactionsV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BinancePayHistoryApi - factory interface
 * @export
 */
export const BinancePayHistoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BinancePayHistoryApiFp(configuration)
    return {
        /**
         * Get Pay Trade History
         * @summary Get Pay Trade History
         * @param {BinancePayHistoryApiGetPayTransactionsV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayTransactionsV1(requestParameters: BinancePayHistoryApiGetPayTransactionsV1Request, options?: RawAxiosRequestConfig): AxiosPromise<GetPayTransactionsV1Resp> {
            return localVarFp.getPayTransactionsV1(requestParameters.timestamp, requestParameters.startTime, requestParameters.endTime, requestParameters.limit, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BinancePayHistoryApi - interface
 * @export
 * @interface BinancePayHistoryApi
 */
export interface BinancePayHistoryApiInterface {
    /**
     * Get Pay Trade History
     * @summary Get Pay Trade History
     * @param {BinancePayHistoryApiGetPayTransactionsV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BinancePayHistoryApiInterface
     */
    getPayTransactionsV1(requestParameters: BinancePayHistoryApiGetPayTransactionsV1Request, options?: RawAxiosRequestConfig): AxiosPromise<GetPayTransactionsV1Resp>;

}

/**
 * Request parameters for getPayTransactionsV1 operation in BinancePayHistoryApi.
 * @export
 * @interface BinancePayHistoryApiGetPayTransactionsV1Request
 */
export interface BinancePayHistoryApiGetPayTransactionsV1Request {
    /**
     * 
     * @type {number}
     * @memberof BinancePayHistoryApiGetPayTransactionsV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof BinancePayHistoryApiGetPayTransactionsV1
     */
    readonly startTime?: number

    /**
     * 
     * @type {number}
     * @memberof BinancePayHistoryApiGetPayTransactionsV1
     */
    readonly endTime?: number

    /**
     * default 100, max 100
     * @type {number}
     * @memberof BinancePayHistoryApiGetPayTransactionsV1
     */
    readonly limit?: number

    /**
     * 
     * @type {number}
     * @memberof BinancePayHistoryApiGetPayTransactionsV1
     */
    readonly recvWindow?: number
}

/**
 * BinancePayHistoryApi - object-oriented interface
 * @export
 * @class BinancePayHistoryApi
 * @extends {BaseAPI}
 */
export class BinancePayHistoryApi extends BaseAPI implements BinancePayHistoryApiInterface {
    /**
     * Get Pay Trade History
     * @summary Get Pay Trade History
     * @param {BinancePayHistoryApiGetPayTransactionsV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BinancePayHistoryApi
     */
    public getPayTransactionsV1(requestParameters: BinancePayHistoryApiGetPayTransactionsV1Request, options?: RawAxiosRequestConfig) {
        return BinancePayHistoryApiFp(this.configuration).getPayTransactionsV1(requestParameters.timestamp, requestParameters.startTime, requestParameters.endTime, requestParameters.limit, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}

