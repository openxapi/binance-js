/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { PmarginGetUmApiTradingStatusV1RespIndicators } from './pmargin-get-um-api-trading-status-v1-resp-indicators';

/**
 * 
 * @export
 * @interface PmarginGetUmApiTradingStatusV1Resp
 */
export interface PmarginGetUmApiTradingStatusV1Resp {
    /**
     * 
     * @type {PmarginGetUmApiTradingStatusV1RespIndicators}
     * @memberof PmarginGetUmApiTradingStatusV1Resp
     */
    'indicators'?: PmarginGetUmApiTradingStatusV1RespIndicators;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetUmApiTradingStatusV1Resp
     */
    'updateTime'?: number;
}

