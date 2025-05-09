/* tslint:disable */
/* eslint-disable */
/**
 * Binance COIN-M Futures API
 * OpenAPI specification for Binance exchange - Cmfutures API
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
import type { GetLeverageBracketV1RespItemBracketsInner } from './get-leverage-bracket-v1-resp-item-brackets-inner';

/**
 * 
 * @export
 * @interface GetLeverageBracketV2RespItem
 */
export interface GetLeverageBracketV2RespItem {
    /**
     * 
     * @type {Array<GetLeverageBracketV1RespItemBracketsInner>}
     * @memberof GetLeverageBracketV2RespItem
     */
    'brackets'?: Array<GetLeverageBracketV1RespItemBracketsInner>;
    /**
     * 
     * @type {number}
     * @memberof GetLeverageBracketV2RespItem
     */
    'notionalCoef'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetLeverageBracketV2RespItem
     */
    'symbol'?: string;
}

