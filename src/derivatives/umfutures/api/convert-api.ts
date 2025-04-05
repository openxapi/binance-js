/* tslint:disable */
/* eslint-disable */
/**
 * Binance USD-M Futures API
 * OpenAPI specification for Binance exchange - Umfutures API
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
import type { UmfuturesCreateConvertAcceptQuoteV1Resp } from '../model';
// @ts-ignore
import type { UmfuturesCreateConvertGetQuoteV1Resp } from '../model';
// @ts-ignore
import type { UmfuturesGetConvertExchangeInfoV1RespItem } from '../model';
// @ts-ignore
import type { UmfuturesGetConvertOrderStatusV1Resp } from '../model';
/**
 * ConvertApi - axios parameter creator
 * @export
 */
export const ConvertApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Accept the offered quote by quote ID.
         * @summary Accept the offered quote (USER_DATA)
         * @param {string} quoteId 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateConvertAcceptQuoteV1: async (quoteId: string, timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'quoteId' is not null or undefined
            assertParamExists('umfuturesCreateConvertAcceptQuoteV1', 'quoteId', quoteId)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('umfuturesCreateConvertAcceptQuoteV1', 'timestamp', timestamp)
            const localVarPath = `/fapi/v1/convert/acceptQuote`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication ApiKey required


            if (quoteId !== undefined) { 
                localVarFormParams.set('quoteId', quoteId as any);
            }
    
            if (recvWindow !== undefined) { 
                localVarFormParams.set('recvWindow', recvWindow as any);
            }
    
            if (timestamp !== undefined) { 
                localVarFormParams.set('timestamp', timestamp as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();
            // Handle Binance authentication with API key in header and signature in query parameters
            await setBinanceAuthToObject(localVarUrlObj, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Request a quote for the requested token pairs
         * @summary Send Quote Request(USER_DATA)
         * @param {string} fromAsset 
         * @param {number} timestamp 
         * @param {string} toAsset 
         * @param {string} [fromAmount] 
         * @param {number} [recvWindow] 
         * @param {string} [toAmount] 
         * @param {string} [validTime] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateConvertGetQuoteV1: async (fromAsset: string, timestamp: number, toAsset: string, fromAmount?: string, recvWindow?: number, toAmount?: string, validTime?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fromAsset' is not null or undefined
            assertParamExists('umfuturesCreateConvertGetQuoteV1', 'fromAsset', fromAsset)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('umfuturesCreateConvertGetQuoteV1', 'timestamp', timestamp)
            // verify required parameter 'toAsset' is not null or undefined
            assertParamExists('umfuturesCreateConvertGetQuoteV1', 'toAsset', toAsset)
            const localVarPath = `/fapi/v1/convert/getQuote`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication ApiKey required


            if (fromAmount !== undefined) { 
                localVarFormParams.set('fromAmount', fromAmount as any);
            }
    
            if (fromAsset !== undefined) { 
                localVarFormParams.set('fromAsset', fromAsset as any);
            }
    
            if (recvWindow !== undefined) { 
                localVarFormParams.set('recvWindow', recvWindow as any);
            }
    
            if (timestamp !== undefined) { 
                localVarFormParams.set('timestamp', timestamp as any);
            }
    
            if (toAmount !== undefined) { 
                localVarFormParams.set('toAmount', toAmount as any);
            }
    
            if (toAsset !== undefined) { 
                localVarFormParams.set('toAsset', toAsset as any);
            }
    
            if (validTime !== undefined) { 
                localVarFormParams.set('validTime', validTime as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();
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
        umfuturesGetConvertExchangeInfoV1: async (fromAsset?: string, toAsset?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fapi/v1/convert/exchangeInfo`;
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
        /**
         * Query order status by order ID.
         * @summary Order status(USER_DATA)
         * @param {string} [orderId] Either orderId or quoteId is required
         * @param {string} [quoteId] Either orderId or quoteId is required
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesGetConvertOrderStatusV1: async (orderId?: string, quoteId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fapi/v1/convert/orderStatus`;
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

            if (orderId !== undefined) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (quoteId !== undefined) {
                localVarQueryParameter['quoteId'] = quoteId;
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
 * ConvertApi - functional programming interface
 * @export
 */
export const ConvertApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConvertApiAxiosParamCreator(configuration)
    return {
        /**
         * Accept the offered quote by quote ID.
         * @summary Accept the offered quote (USER_DATA)
         * @param {string} quoteId 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesCreateConvertAcceptQuoteV1(quoteId: string, timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UmfuturesCreateConvertAcceptQuoteV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesCreateConvertAcceptQuoteV1(quoteId, timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConvertApi.umfuturesCreateConvertAcceptQuoteV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Request a quote for the requested token pairs
         * @summary Send Quote Request(USER_DATA)
         * @param {string} fromAsset 
         * @param {number} timestamp 
         * @param {string} toAsset 
         * @param {string} [fromAmount] 
         * @param {number} [recvWindow] 
         * @param {string} [toAmount] 
         * @param {string} [validTime] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesCreateConvertGetQuoteV1(fromAsset: string, timestamp: number, toAsset: string, fromAmount?: string, recvWindow?: number, toAmount?: string, validTime?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UmfuturesCreateConvertGetQuoteV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesCreateConvertGetQuoteV1(fromAsset, timestamp, toAsset, fromAmount, recvWindow, toAmount, validTime, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConvertApi.umfuturesCreateConvertGetQuoteV1']?.[localVarOperationServerIndex]?.url;
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
        async umfuturesGetConvertExchangeInfoV1(fromAsset?: string, toAsset?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UmfuturesGetConvertExchangeInfoV1RespItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesGetConvertExchangeInfoV1(fromAsset, toAsset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConvertApi.umfuturesGetConvertExchangeInfoV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Query order status by order ID.
         * @summary Order status(USER_DATA)
         * @param {string} [orderId] Either orderId or quoteId is required
         * @param {string} [quoteId] Either orderId or quoteId is required
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesGetConvertOrderStatusV1(orderId?: string, quoteId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UmfuturesGetConvertOrderStatusV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesGetConvertOrderStatusV1(orderId, quoteId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConvertApi.umfuturesGetConvertOrderStatusV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ConvertApi - factory interface
 * @export
 */
export const ConvertApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConvertApiFp(configuration)
    return {
        /**
         * Accept the offered quote by quote ID.
         * @summary Accept the offered quote (USER_DATA)
         * @param {ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateConvertAcceptQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateConvertAcceptQuoteV1Resp> {
            return localVarFp.umfuturesCreateConvertAcceptQuoteV1(requestParameters.quoteId, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Request a quote for the requested token pairs
         * @summary Send Quote Request(USER_DATA)
         * @param {ConvertApiUmfuturesCreateConvertGetQuoteV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateConvertGetQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertGetQuoteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateConvertGetQuoteV1Resp> {
            return localVarFp.umfuturesCreateConvertGetQuoteV1(requestParameters.fromAsset, requestParameters.timestamp, requestParameters.toAsset, requestParameters.fromAmount, requestParameters.recvWindow, requestParameters.toAmount, requestParameters.validTime, options).then((request) => request(axios, basePath));
        },
        /**
         * Query for all convertible token pairs and the tokens’ respective upper/lower limits
         * @summary List All Convert Pairs
         * @param {ConvertApiUmfuturesGetConvertExchangeInfoV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesGetConvertExchangeInfoV1(requestParameters: ConvertApiUmfuturesGetConvertExchangeInfoV1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<UmfuturesGetConvertExchangeInfoV1RespItem>> {
            return localVarFp.umfuturesGetConvertExchangeInfoV1(requestParameters.fromAsset, requestParameters.toAsset, options).then((request) => request(axios, basePath));
        },
        /**
         * Query order status by order ID.
         * @summary Order status(USER_DATA)
         * @param {ConvertApiUmfuturesGetConvertOrderStatusV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesGetConvertOrderStatusV1(requestParameters: ConvertApiUmfuturesGetConvertOrderStatusV1Request = {}, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesGetConvertOrderStatusV1Resp> {
            return localVarFp.umfuturesGetConvertOrderStatusV1(requestParameters.orderId, requestParameters.quoteId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConvertApi - interface
 * @export
 * @interface ConvertApi
 */
export interface ConvertApiInterface {
    /**
     * Accept the offered quote by quote ID.
     * @summary Accept the offered quote (USER_DATA)
     * @param {ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApiInterface
     */
    umfuturesCreateConvertAcceptQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateConvertAcceptQuoteV1Resp>;

    /**
     * Request a quote for the requested token pairs
     * @summary Send Quote Request(USER_DATA)
     * @param {ConvertApiUmfuturesCreateConvertGetQuoteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApiInterface
     */
    umfuturesCreateConvertGetQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertGetQuoteV1Request, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateConvertGetQuoteV1Resp>;

    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     * @summary List All Convert Pairs
     * @param {ConvertApiUmfuturesGetConvertExchangeInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApiInterface
     */
    umfuturesGetConvertExchangeInfoV1(requestParameters?: ConvertApiUmfuturesGetConvertExchangeInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<Array<UmfuturesGetConvertExchangeInfoV1RespItem>>;

    /**
     * Query order status by order ID.
     * @summary Order status(USER_DATA)
     * @param {ConvertApiUmfuturesGetConvertOrderStatusV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApiInterface
     */
    umfuturesGetConvertOrderStatusV1(requestParameters?: ConvertApiUmfuturesGetConvertOrderStatusV1Request, options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesGetConvertOrderStatusV1Resp>;

}

/**
 * Request parameters for umfuturesCreateConvertAcceptQuoteV1 operation in ConvertApi.
 * @export
 * @interface ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request
 */
export interface ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request {
    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertAcceptQuoteV1
     */
    readonly quoteId: string

    /**
     * 
     * @type {number}
     * @memberof ConvertApiUmfuturesCreateConvertAcceptQuoteV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof ConvertApiUmfuturesCreateConvertAcceptQuoteV1
     */
    readonly recvWindow?: number
}

/**
 * Request parameters for umfuturesCreateConvertGetQuoteV1 operation in ConvertApi.
 * @export
 * @interface ConvertApiUmfuturesCreateConvertGetQuoteV1Request
 */
export interface ConvertApiUmfuturesCreateConvertGetQuoteV1Request {
    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly fromAsset: string

    /**
     * 
     * @type {number}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly toAsset: string

    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly fromAmount?: string

    /**
     * 
     * @type {number}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly recvWindow?: number

    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly toAmount?: string

    /**
     * 
     * @type {string}
     * @memberof ConvertApiUmfuturesCreateConvertGetQuoteV1
     */
    readonly validTime?: string
}

/**
 * Request parameters for umfuturesGetConvertExchangeInfoV1 operation in ConvertApi.
 * @export
 * @interface ConvertApiUmfuturesGetConvertExchangeInfoV1Request
 */
export interface ConvertApiUmfuturesGetConvertExchangeInfoV1Request {
    /**
     * User spends coin
     * @type {string}
     * @memberof ConvertApiUmfuturesGetConvertExchangeInfoV1
     */
    readonly fromAsset?: string

    /**
     * User receives coin
     * @type {string}
     * @memberof ConvertApiUmfuturesGetConvertExchangeInfoV1
     */
    readonly toAsset?: string
}

/**
 * Request parameters for umfuturesGetConvertOrderStatusV1 operation in ConvertApi.
 * @export
 * @interface ConvertApiUmfuturesGetConvertOrderStatusV1Request
 */
export interface ConvertApiUmfuturesGetConvertOrderStatusV1Request {
    /**
     * Either orderId or quoteId is required
     * @type {string}
     * @memberof ConvertApiUmfuturesGetConvertOrderStatusV1
     */
    readonly orderId?: string

    /**
     * Either orderId or quoteId is required
     * @type {string}
     * @memberof ConvertApiUmfuturesGetConvertOrderStatusV1
     */
    readonly quoteId?: string
}

/**
 * ConvertApi - object-oriented interface
 * @export
 * @class ConvertApi
 * @extends {BaseAPI}
 */
export class ConvertApi extends BaseAPI implements ConvertApiInterface {
    /**
     * Accept the offered quote by quote ID.
     * @summary Accept the offered quote (USER_DATA)
     * @param {ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApi
     */
    public umfuturesCreateConvertAcceptQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertAcceptQuoteV1Request, options?: RawAxiosRequestConfig) {
        return ConvertApiFp(this.configuration).umfuturesCreateConvertAcceptQuoteV1(requestParameters.quoteId, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Request a quote for the requested token pairs
     * @summary Send Quote Request(USER_DATA)
     * @param {ConvertApiUmfuturesCreateConvertGetQuoteV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApi
     */
    public umfuturesCreateConvertGetQuoteV1(requestParameters: ConvertApiUmfuturesCreateConvertGetQuoteV1Request, options?: RawAxiosRequestConfig) {
        return ConvertApiFp(this.configuration).umfuturesCreateConvertGetQuoteV1(requestParameters.fromAsset, requestParameters.timestamp, requestParameters.toAsset, requestParameters.fromAmount, requestParameters.recvWindow, requestParameters.toAmount, requestParameters.validTime, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query for all convertible token pairs and the tokens’ respective upper/lower limits
     * @summary List All Convert Pairs
     * @param {ConvertApiUmfuturesGetConvertExchangeInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApi
     */
    public umfuturesGetConvertExchangeInfoV1(requestParameters: ConvertApiUmfuturesGetConvertExchangeInfoV1Request = {}, options?: RawAxiosRequestConfig) {
        return ConvertApiFp(this.configuration).umfuturesGetConvertExchangeInfoV1(requestParameters.fromAsset, requestParameters.toAsset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query order status by order ID.
     * @summary Order status(USER_DATA)
     * @param {ConvertApiUmfuturesGetConvertOrderStatusV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConvertApi
     */
    public umfuturesGetConvertOrderStatusV1(requestParameters: ConvertApiUmfuturesGetConvertOrderStatusV1Request = {}, options?: RawAxiosRequestConfig) {
        return ConvertApiFp(this.configuration).umfuturesGetConvertOrderStatusV1(requestParameters.orderId, requestParameters.quoteId, options).then((request) => request(this.axios, this.basePath));
    }
}

