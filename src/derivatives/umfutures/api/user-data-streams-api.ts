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
import type { UmfuturesCreateListenKeyV1Resp } from '../model';
// @ts-ignore
import type { UmfuturesUpdateListenKeyV1Resp } from '../model';
/**
 * UserDataStreamsApi - axios parameter creator
 * @export
 */
export const UserDataStreamsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active listenKey, that listenKey will be returned and its validity will be extended for 60 minutes.
         * @summary Start User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateListenKeyV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fapi/v1/listenKey`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
        /**
         * Close out a user data stream.
         * @summary Close User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesDeleteListenKeyV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fapi/v1/listenKey`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It\'s recommended to send a ping about every 60 minutes.
         * @summary Keepalive User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesUpdateListenKeyV1: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/fapi/v1/listenKey`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
 * UserDataStreamsApi - functional programming interface
 * @export
 */
export const UserDataStreamsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserDataStreamsApiAxiosParamCreator(configuration)
    return {
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active listenKey, that listenKey will be returned and its validity will be extended for 60 minutes.
         * @summary Start User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesCreateListenKeyV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UmfuturesCreateListenKeyV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesCreateListenKeyV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataStreamsApi.umfuturesCreateListenKeyV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Close out a user data stream.
         * @summary Close User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesDeleteListenKeyV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesDeleteListenKeyV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataStreamsApi.umfuturesDeleteListenKeyV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It\'s recommended to send a ping about every 60 minutes.
         * @summary Keepalive User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umfuturesUpdateListenKeyV1(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UmfuturesUpdateListenKeyV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umfuturesUpdateListenKeyV1(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserDataStreamsApi.umfuturesUpdateListenKeyV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserDataStreamsApi - factory interface
 * @export
 */
export const UserDataStreamsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserDataStreamsApiFp(configuration)
    return {
        /**
         * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active listenKey, that listenKey will be returned and its validity will be extended for 60 minutes.
         * @summary Start User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesCreateListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateListenKeyV1Resp> {
            return localVarFp.umfuturesCreateListenKeyV1(options).then((request) => request(axios, basePath));
        },
        /**
         * Close out a user data stream.
         * @summary Close User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesDeleteListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.umfuturesDeleteListenKeyV1(options).then((request) => request(axios, basePath));
        },
        /**
         * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It\'s recommended to send a ping about every 60 minutes.
         * @summary Keepalive User Data Stream (USER_STREAM)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umfuturesUpdateListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesUpdateListenKeyV1Resp> {
            return localVarFp.umfuturesUpdateListenKeyV1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserDataStreamsApi - interface
 * @export
 * @interface UserDataStreamsApi
 */
export interface UserDataStreamsApiInterface {
    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active listenKey, that listenKey will be returned and its validity will be extended for 60 minutes.
     * @summary Start User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApiInterface
     */
    umfuturesCreateListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesCreateListenKeyV1Resp>;

    /**
     * Close out a user data stream.
     * @summary Close User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApiInterface
     */
    umfuturesDeleteListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<object>;

    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It\'s recommended to send a ping about every 60 minutes.
     * @summary Keepalive User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApiInterface
     */
    umfuturesUpdateListenKeyV1(options?: RawAxiosRequestConfig): AxiosPromise<UmfuturesUpdateListenKeyV1Resp>;

}

/**
 * UserDataStreamsApi - object-oriented interface
 * @export
 * @class UserDataStreamsApi
 * @extends {BaseAPI}
 */
export class UserDataStreamsApi extends BaseAPI implements UserDataStreamsApiInterface {
    /**
     * Start a new user data stream. The stream will close after 60 minutes unless a keepalive is sent. If the account has an active listenKey, that listenKey will be returned and its validity will be extended for 60 minutes.
     * @summary Start User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApi
     */
    public umfuturesCreateListenKeyV1(options?: RawAxiosRequestConfig) {
        return UserDataStreamsApiFp(this.configuration).umfuturesCreateListenKeyV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Close out a user data stream.
     * @summary Close User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApi
     */
    public umfuturesDeleteListenKeyV1(options?: RawAxiosRequestConfig) {
        return UserDataStreamsApiFp(this.configuration).umfuturesDeleteListenKeyV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. It\'s recommended to send a ping about every 60 minutes.
     * @summary Keepalive User Data Stream (USER_STREAM)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserDataStreamsApi
     */
    public umfuturesUpdateListenKeyV1(options?: RawAxiosRequestConfig) {
        return UserDataStreamsApiFp(this.configuration).umfuturesUpdateListenKeyV1(options).then((request) => request(this.axios, this.basePath));
    }
}

