/* tslint:disable */
/* eslint-disable */
/**
 * Binance Margin Trading API
 * OpenAPI specification for Binance exchange - Margin API
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
import type { MarginGetMarginExchangeSmallLiabilityHistoryV1RespRowsInner } from './margin-get-margin-exchange-small-liability-history-v1-resp-rows-inner';

/**
 * 
 * @export
 * @interface MarginGetMarginExchangeSmallLiabilityHistoryV1Resp
 */
export interface MarginGetMarginExchangeSmallLiabilityHistoryV1Resp {
    /**
     * 
     * @type {Array<MarginGetMarginExchangeSmallLiabilityHistoryV1RespRowsInner>}
     * @memberof MarginGetMarginExchangeSmallLiabilityHistoryV1Resp
     */
    'rows'?: Array<MarginGetMarginExchangeSmallLiabilityHistoryV1RespRowsInner>;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginExchangeSmallLiabilityHistoryV1Resp
     */
    'total'?: number;
}

