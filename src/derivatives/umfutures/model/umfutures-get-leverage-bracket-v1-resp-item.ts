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


// May contain unused imports in some cases
// @ts-ignore
import type { UmfuturesGetLeverageBracketV1RespItemBracketsInner } from './umfutures-get-leverage-bracket-v1-resp-item-brackets-inner';

/**
 * 
 * @export
 * @interface UmfuturesGetLeverageBracketV1RespItem
 */
export interface UmfuturesGetLeverageBracketV1RespItem {
    /**
     * 
     * @type {Array<UmfuturesGetLeverageBracketV1RespItemBracketsInner>}
     * @memberof UmfuturesGetLeverageBracketV1RespItem
     */
    'brackets'?: Array<UmfuturesGetLeverageBracketV1RespItemBracketsInner>;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetLeverageBracketV1RespItem
     */
    'notionalCoef'?: number;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetLeverageBracketV1RespItem
     */
    'symbol'?: string;
}

