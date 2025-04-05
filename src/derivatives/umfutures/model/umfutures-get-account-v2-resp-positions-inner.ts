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



/**
 * 
 * @export
 * @interface UmfuturesGetAccountV2RespPositionsInner
 */
export interface UmfuturesGetAccountV2RespPositionsInner {
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'askNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'bidNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'entryPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'initialMargin'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'isolated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'leverage'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'maintMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'maxNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'openOrderInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'positionAmt'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'positionInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'unrealizedProfit'?: string;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetAccountV2RespPositionsInner
     */
    'updateTime'?: number;
}

