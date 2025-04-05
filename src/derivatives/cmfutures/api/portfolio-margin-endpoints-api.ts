/* tslint:disable */
/* eslint-disable */
/**
 * Binance COIN-M Futures API
 * OpenAPI specification for Binance exchange - Cmfutures API
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
import type { CmfuturesGetPmAccountInfoV1Resp } from '../model';
/**
 * PortfolioMarginEndpointsApi - axios parameter creator
 * @export
 */
export const PortfolioMarginEndpointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get Classic Portfolio Margin current account information.
         * @summary Classic Portfolio Margin Account Information (USER_DATA)
         * @param {string} asset 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cmfuturesGetPmAccountInfoV1: async (asset: string, recvWindow?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'asset' is not null or undefined
            assertParamExists('cmfuturesGetPmAccountInfoV1', 'asset', asset)
            const localVarPath = `/dapi/v1/pmAccountInfo`;
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

            if (asset !== undefined) {
                localVarQueryParameter['asset'] = asset;
            }

            if (recvWindow !== undefined) {
                localVarQueryParameter['recvWindow'] = recvWindow;
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
 * PortfolioMarginEndpointsApi - functional programming interface
 * @export
 */
export const PortfolioMarginEndpointsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PortfolioMarginEndpointsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get Classic Portfolio Margin current account information.
         * @summary Classic Portfolio Margin Account Information (USER_DATA)
         * @param {string} asset 
         * @param {number} [recvWindow] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cmfuturesGetPmAccountInfoV1(asset: string, recvWindow?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CmfuturesGetPmAccountInfoV1Resp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cmfuturesGetPmAccountInfoV1(asset, recvWindow, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PortfolioMarginEndpointsApi.cmfuturesGetPmAccountInfoV1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PortfolioMarginEndpointsApi - factory interface
 * @export
 */
export const PortfolioMarginEndpointsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PortfolioMarginEndpointsApiFp(configuration)
    return {
        /**
         * Get Classic Portfolio Margin current account information.
         * @summary Classic Portfolio Margin Account Information (USER_DATA)
         * @param {PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cmfuturesGetPmAccountInfoV1(requestParameters: PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CmfuturesGetPmAccountInfoV1Resp> {
            return localVarFp.cmfuturesGetPmAccountInfoV1(requestParameters.asset, requestParameters.recvWindow, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PortfolioMarginEndpointsApi - interface
 * @export
 * @interface PortfolioMarginEndpointsApi
 */
export interface PortfolioMarginEndpointsApiInterface {
    /**
     * Get Classic Portfolio Margin current account information.
     * @summary Classic Portfolio Margin Account Information (USER_DATA)
     * @param {PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioMarginEndpointsApiInterface
     */
    cmfuturesGetPmAccountInfoV1(requestParameters: PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request, options?: RawAxiosRequestConfig): AxiosPromise<CmfuturesGetPmAccountInfoV1Resp>;

}

/**
 * Request parameters for cmfuturesGetPmAccountInfoV1 operation in PortfolioMarginEndpointsApi.
 * @export
 * @interface PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request
 */
export interface PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request {
    /**
     * 
     * @type {string}
     * @memberof PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1
     */
    readonly asset: string

    /**
     * 
     * @type {number}
     * @memberof PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1
     */
    readonly recvWindow?: number
}

/**
 * PortfolioMarginEndpointsApi - object-oriented interface
 * @export
 * @class PortfolioMarginEndpointsApi
 * @extends {BaseAPI}
 */
export class PortfolioMarginEndpointsApi extends BaseAPI implements PortfolioMarginEndpointsApiInterface {
    /**
     * Get Classic Portfolio Margin current account information.
     * @summary Classic Portfolio Margin Account Information (USER_DATA)
     * @param {PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PortfolioMarginEndpointsApi
     */
    public cmfuturesGetPmAccountInfoV1(requestParameters: PortfolioMarginEndpointsApiCmfuturesGetPmAccountInfoV1Request, options?: RawAxiosRequestConfig) {
        return PortfolioMarginEndpointsApiFp(this.configuration).cmfuturesGetPmAccountInfoV1(requestParameters.asset, requestParameters.recvWindow, options).then((request) => request(this.axios, this.basePath));
    }
}

