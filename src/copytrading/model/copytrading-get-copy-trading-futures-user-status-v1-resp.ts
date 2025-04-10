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


// May contain unused imports in some cases
// @ts-ignore
import type { CopytradingGetCopyTradingFuturesUserStatusV1RespData } from './copytrading-get-copy-trading-futures-user-status-v1-resp-data';

/**
 * 
 * @export
 * @interface CopytradingGetCopyTradingFuturesUserStatusV1Resp
 */
export interface CopytradingGetCopyTradingFuturesUserStatusV1Resp {
    /**
     * 
     * @type {string}
     * @memberof CopytradingGetCopyTradingFuturesUserStatusV1Resp
     */
    'code'?: string;
    /**
     * 
     * @type {CopytradingGetCopyTradingFuturesUserStatusV1RespData}
     * @memberof CopytradingGetCopyTradingFuturesUserStatusV1Resp
     */
    'data'?: CopytradingGetCopyTradingFuturesUserStatusV1RespData;
    /**
     * 
     * @type {string}
     * @memberof CopytradingGetCopyTradingFuturesUserStatusV1Resp
     */
    'message'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CopytradingGetCopyTradingFuturesUserStatusV1Resp
     */
    'success'?: boolean;
}

