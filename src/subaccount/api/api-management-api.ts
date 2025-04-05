/* tslint:disable */
/* eslint-disable */
/**
 * Binance Sub Account API
 * OpenAPI specification for Binance exchange - Subaccount API
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
import type { SubaccountCreateSubAccountSubAccountApiIpRestrictionV2Resp } from '../model';
// @ts-ignore
import type { SubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Resp } from '../model';
// @ts-ignore
import type { SubaccountGetSubAccountSubAccountApiIpRestrictionV1Resp } from '../model';
/**
 * ApiManagementApi - axios parameter creator
 * @export
 */
export const ApiManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add IP Restriction for Sub-Account API key
         * @summary Add IP Restriction for Sub-Account API key(For Master Account)
         * @param {string} email 
         * @param {string} status 
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {string} [ipAddress] 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountCreateSubAccountSubAccountApiIpRestrictionV2: async (email: string, status: string, subAccountApiKey: string, timestamp: number, ipAddress?: string, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('subaccountCreateSubAccountSubAccountApiIpRestrictionV2', 'email', email)
            // verify required parameter 'status' is not null or undefined
            assertParamExists('subaccountCreateSubAccountSubAccountApiIpRestrictionV2', 'status', status)
            // verify required parameter 'subAccountApiKey' is not null or undefined
            assertParamExists('subaccountCreateSubAccountSubAccountApiIpRestrictionV2', 'subAccountApiKey', subAccountApiKey)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('subaccountCreateSubAccountSubAccountApiIpRestrictionV2', 'timestamp', timestamp)
            const localVarPath = `/sapi/v2/sub-account/subAccountApi/ipRestriction`;
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


            if (email !== undefined) { 
                localVarFormParams.set('email', email as any);
            }
    
            if (ipAddress !== undefined) { 
                localVarFormParams.set('ipAddress', ipAddress as any);
            }
    
            if (recvWindow !== undefined) { 
                localVarFormParams.set('recvWindow', recvWindow as any);
            }
    
            if (status !== undefined) { 
                localVarFormParams.set('status', status as any);
            }
    
            if (subAccountApiKey !== undefined) { 
                localVarFormParams.set('subAccountApiKey', subAccountApiKey as any);
            }
    
            if (timestamp !== undefined) { 
                localVarFormParams.set('timestamp', timestamp as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete IP List For a Sub-account API Key
         * @summary Delete IP List For a Sub-account API Key(For Master Account)
         * @param {string} email &lt;a href&#x3D;\&quot;/docs/sub_account/api-management/Delete-IP-List-For-a-Sub-account-API-Key#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {string} [ipAddress] Can be added in batches, separated by commas
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1: async (email: string, subAccountApiKey: string, timestamp: number, ipAddress?: string, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1', 'email', email)
            // verify required parameter 'subAccountApiKey' is not null or undefined
            assertParamExists('subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1', 'subAccountApiKey', subAccountApiKey)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (subAccountApiKey !== undefined) {
                localVarQueryParameter['subAccountApiKey'] = subAccountApiKey;
            }

            if (ipAddress !== undefined) {
                localVarQueryParameter['ipAddress'] = ipAddress;
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
        /**
         * Get IP Restriction for a Sub-account API Key
         * @summary Get IP Restriction for a Sub-account API Key(For Master Account)
         * @param {string} email &lt;a href&#x3D;\&quot;/docs/sub_account/api-management#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountGetSubAccountSubAccountApiIpRestrictionV1: async (email: string, subAccountApiKey: string, timestamp: number, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('subaccountGetSubAccountSubAccountApiIpRestrictionV1', 'email', email)
            // verify required parameter 'subAccountApiKey' is not null or undefined
            assertParamExists('subaccountGetSubAccountSubAccountApiIpRestrictionV1', 'subAccountApiKey', subAccountApiKey)
            // verify required parameter 'timestamp' is not null or undefined
            assertParamExists('subaccountGetSubAccountSubAccountApiIpRestrictionV1', 'timestamp', timestamp)
            const localVarPath = `/sapi/v1/sub-account/subAccountApi/ipRestriction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (subAccountApiKey !== undefined) {
                localVarQueryParameter['subAccountApiKey'] = subAccountApiKey;
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
 * ApiManagementApi - functional programming interface
 * @export
 */
export const ApiManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Add IP Restriction for Sub-Account API key
         * @summary Add IP Restriction for Sub-Account API key(For Master Account)
         * @param {string} email 
         * @param {string} status 
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {string} [ipAddress] 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subaccountCreateSubAccountSubAccountApiIpRestrictionV2(email: string, status: string, subAccountApiKey: string, timestamp: number, ipAddress?: string, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubaccountCreateSubAccountSubAccountApiIpRestrictionV2Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subaccountCreateSubAccountSubAccountApiIpRestrictionV2(email, status, subAccountApiKey, timestamp, ipAddress, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiManagementApi.subaccountCreateSubAccountSubAccountApiIpRestrictionV2']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete IP List For a Sub-account API Key
         * @summary Delete IP List For a Sub-account API Key(For Master Account)
         * @param {string} email &lt;a href&#x3D;\&quot;/docs/sub_account/api-management/Delete-IP-List-For-a-Sub-account-API-Key#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {string} [ipAddress] Can be added in batches, separated by commas
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(email: string, subAccountApiKey: string, timestamp: number, ipAddress?: string, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(email, subAccountApiKey, timestamp, ipAddress, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiManagementApi.subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get IP Restriction for a Sub-account API Key
         * @summary Get IP Restriction for a Sub-account API Key(For Master Account)
         * @param {string} email &lt;a href&#x3D;\&quot;/docs/sub_account/api-management#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
         * @param {string} subAccountApiKey 
         * @param {number} timestamp 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subaccountGetSubAccountSubAccountApiIpRestrictionV1(email: string, subAccountApiKey: string, timestamp: number, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubaccountGetSubAccountSubAccountApiIpRestrictionV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.subaccountGetSubAccountSubAccountApiIpRestrictionV1(email, subAccountApiKey, timestamp, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiManagementApi.subaccountGetSubAccountSubAccountApiIpRestrictionV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiManagementApi - factory interface
 * @export
 */
export const ApiManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiManagementApiFp(configuration)
    return {
        /**
         * Add IP Restriction for Sub-Account API key
         * @summary Add IP Restriction for Sub-Account API key(For Master Account)
         * @param {ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountCreateSubAccountSubAccountApiIpRestrictionV2(requestParameters: ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountCreateSubAccountSubAccountApiIpRestrictionV2Resp> {
            return localVarFp.subaccountCreateSubAccountSubAccountApiIpRestrictionV2(requestParameters.email, requestParameters.status, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.ipAddress, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete IP List For a Sub-account API Key
         * @summary Delete IP List For a Sub-account API Key(For Master Account)
         * @param {ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(requestParameters: ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Resp> {
            return localVarFp.subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(requestParameters.email, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.ipAddress, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
        /**
         * Get IP Restriction for a Sub-account API Key
         * @summary Get IP Restriction for a Sub-account API Key(For Master Account)
         * @param {ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subaccountGetSubAccountSubAccountApiIpRestrictionV1(requestParameters: ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountGetSubAccountSubAccountApiIpRestrictionV1Resp> {
            return localVarFp.subaccountGetSubAccountSubAccountApiIpRestrictionV1(requestParameters.email, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApiManagementApi - interface
 * @export
 * @interface ApiManagementApi
 */
export interface ApiManagementApiInterface {
    /**
     * Add IP Restriction for Sub-Account API key
     * @summary Add IP Restriction for Sub-Account API key(For Master Account)
     * @param {ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApiInterface
     */
    subaccountCreateSubAccountSubAccountApiIpRestrictionV2(requestParameters: ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountCreateSubAccountSubAccountApiIpRestrictionV2Resp>;

    /**
     * Delete IP List For a Sub-account API Key
     * @summary Delete IP List For a Sub-account API Key(For Master Account)
     * @param {ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApiInterface
     */
    subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(requestParameters: ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Resp>;

    /**
     * Get IP Restriction for a Sub-account API Key
     * @summary Get IP Restriction for a Sub-account API Key(For Master Account)
     * @param {ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApiInterface
     */
    subaccountGetSubAccountSubAccountApiIpRestrictionV1(requestParameters: ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request, options?: RawAxiosRequestConfig): AxiosPromise<SubaccountGetSubAccountSubAccountApiIpRestrictionV1Resp>;

}

/**
 * Request parameters for subaccountCreateSubAccountSubAccountApiIpRestrictionV2 operation in ApiManagementApi.
 * @export
 * @interface ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request
 */
export interface ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request {
    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly email: string

    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly status: string

    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly subAccountApiKey: string

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly timestamp: number

    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly ipAddress?: string

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2
     */
    readonly recvWindow?: number
}

/**
 * Request parameters for subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1 operation in ApiManagementApi.
 * @export
 * @interface ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request
 */
export interface ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request {
    /**
     * &lt;a href&#x3D;\&quot;/docs/sub_account/api-management/Delete-IP-List-For-a-Sub-account-API-Key#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
     * @type {string}
     * @memberof ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1
     */
    readonly email: string

    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1
     */
    readonly subAccountApiKey: string

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1
     */
    readonly timestamp: number

    /**
     * Can be added in batches, separated by commas
     * @type {string}
     * @memberof ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1
     */
    readonly ipAddress?: string

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1
     */
    readonly recvWindow?: number
}

/**
 * Request parameters for subaccountGetSubAccountSubAccountApiIpRestrictionV1 operation in ApiManagementApi.
 * @export
 * @interface ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request
 */
export interface ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request {
    /**
     * &lt;a href&#x3D;\&quot;/docs/sub_account/api-management#email-address\&quot;&gt;Sub-account email&lt;/a&gt;
     * @type {string}
     * @memberof ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1
     */
    readonly email: string

    /**
     * 
     * @type {string}
     * @memberof ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1
     */
    readonly subAccountApiKey: string

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1
     */
    readonly timestamp: number

    /**
     * 
     * @type {number}
     * @memberof ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1
     */
    readonly recvWindow?: number
}

/**
 * ApiManagementApi - object-oriented interface
 * @export
 * @class ApiManagementApi
 * @extends {BaseAPI}
 */
export class ApiManagementApi extends BaseAPI implements ApiManagementApiInterface {
    /**
     * Add IP Restriction for Sub-Account API key
     * @summary Add IP Restriction for Sub-Account API key(For Master Account)
     * @param {ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApi
     */
    public subaccountCreateSubAccountSubAccountApiIpRestrictionV2(requestParameters: ApiManagementApiSubaccountCreateSubAccountSubAccountApiIpRestrictionV2Request, options?: RawAxiosRequestConfig) {
        return ApiManagementApiFp(this.configuration).subaccountCreateSubAccountSubAccountApiIpRestrictionV2(requestParameters.email, requestParameters.status, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.ipAddress, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete IP List For a Sub-account API Key
     * @summary Delete IP List For a Sub-account API Key(For Master Account)
     * @param {ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApi
     */
    public subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(requestParameters: ApiManagementApiSubaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1Request, options?: RawAxiosRequestConfig) {
        return ApiManagementApiFp(this.configuration).subaccountDeleteSubAccountSubAccountApiIpRestrictionIpListV1(requestParameters.email, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.ipAddress, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get IP Restriction for a Sub-account API Key
     * @summary Get IP Restriction for a Sub-account API Key(For Master Account)
     * @param {ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiManagementApi
     */
    public subaccountGetSubAccountSubAccountApiIpRestrictionV1(requestParameters: ApiManagementApiSubaccountGetSubAccountSubAccountApiIpRestrictionV1Request, options?: RawAxiosRequestConfig) {
        return ApiManagementApiFp(this.configuration).subaccountGetSubAccountSubAccountApiIpRestrictionV1(requestParameters.email, requestParameters.subAccountApiKey, requestParameters.timestamp, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}

