/* tslint:disable */
/* eslint-disable */
/**
 * Binance Convert API
 * OpenAPI specification for Binance exchange - Convert API
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
import type { ConvertGetConvertTradeFlowV1RespListInner } from './convert-get-convert-trade-flow-v1-resp-list-inner';

/**
 * 
 * @export
 * @interface ConvertGetConvertTradeFlowV1Resp
 */
export interface ConvertGetConvertTradeFlowV1Resp {
    /**
     * 
     * @type {number}
     * @memberof ConvertGetConvertTradeFlowV1Resp
     */
    'endTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertGetConvertTradeFlowV1Resp
     */
    'limit'?: number;
    /**
     * 
     * @type {Array<ConvertGetConvertTradeFlowV1RespListInner>}
     * @memberof ConvertGetConvertTradeFlowV1Resp
     */
    'list'?: Array<ConvertGetConvertTradeFlowV1RespListInner>;
    /**
     * 
     * @type {boolean}
     * @memberof ConvertGetConvertTradeFlowV1Resp
     */
    'moreData'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ConvertGetConvertTradeFlowV1Resp
     */
    'startTime'?: number;
}

