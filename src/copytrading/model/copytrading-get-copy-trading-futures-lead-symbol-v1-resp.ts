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
import type { CopytradingGetCopyTradingFuturesLeadSymbolV1RespDataInner } from './copytrading-get-copy-trading-futures-lead-symbol-v1-resp-data-inner';

/**
 * 
 * @export
 * @interface CopytradingGetCopyTradingFuturesLeadSymbolV1Resp
 */
export interface CopytradingGetCopyTradingFuturesLeadSymbolV1Resp {
    /**
     * 
     * @type {string}
     * @memberof CopytradingGetCopyTradingFuturesLeadSymbolV1Resp
     */
    'code'?: string;
    /**
     * 
     * @type {Array<CopytradingGetCopyTradingFuturesLeadSymbolV1RespDataInner>}
     * @memberof CopytradingGetCopyTradingFuturesLeadSymbolV1Resp
     */
    'data'?: Array<CopytradingGetCopyTradingFuturesLeadSymbolV1RespDataInner>;
    /**
     * 
     * @type {string}
     * @memberof CopytradingGetCopyTradingFuturesLeadSymbolV1Resp
     */
    'message'?: string;
}

