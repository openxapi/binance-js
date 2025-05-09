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



/**
 * 
 * @export
 * @interface GetAccountV2RespPositionsInner
 */
export interface GetAccountV2RespPositionsInner {
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'askNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'bidNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'entryPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'initialMargin'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetAccountV2RespPositionsInner
     */
    'isolated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'leverage'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'maintMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'maxNotional'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'openOrderInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'positionAmt'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'positionInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV2RespPositionsInner
     */
    'unrealizedProfit'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetAccountV2RespPositionsInner
     */
    'updateTime'?: number;
}

