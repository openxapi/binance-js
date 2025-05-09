/* tslint:disable */
/* eslint-disable */
/**
 * Binance USD-M Futures API
 * OpenAPI specification for Binance exchange - Umfutures API
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { UmfuturesGetExchangeInfoV1RespAssetsInner } from './umfutures-get-exchange-info-v1-resp-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { UmfuturesGetExchangeInfoV1RespRateLimitsInner } from './umfutures-get-exchange-info-v1-resp-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { UmfuturesGetExchangeInfoV1RespSymbolsInner } from './umfutures-get-exchange-info-v1-resp-symbols-inner';

/**
 * 
 * @export
 * @interface UmfuturesGetExchangeInfoV1Resp
 */
export interface UmfuturesGetExchangeInfoV1Resp {
    /**
     * 
     * @type {Array<UmfuturesGetExchangeInfoV1RespAssetsInner>}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'assets'?: Array<UmfuturesGetExchangeInfoV1RespAssetsInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'exchangeFilters'?: Array<string>;
    /**
     * 
     * @type {Array<UmfuturesGetExchangeInfoV1RespRateLimitsInner>}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'rateLimits'?: Array<UmfuturesGetExchangeInfoV1RespRateLimitsInner>;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'serverTime'?: number;
    /**
     * 
     * @type {Array<UmfuturesGetExchangeInfoV1RespSymbolsInner>}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'symbols'?: Array<UmfuturesGetExchangeInfoV1RespSymbolsInner>;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetExchangeInfoV1Resp
     */
    'timezone'?: string;
}

