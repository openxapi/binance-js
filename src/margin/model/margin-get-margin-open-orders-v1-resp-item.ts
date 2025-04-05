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



/**
 * 
 * @export
 * @interface MarginGetMarginOpenOrdersV1RespItem
 */
export interface MarginGetMarginOpenOrdersV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'isIsolated'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'isWorking'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginOpenOrdersV1RespItem
     */
    'updateTime'?: number;
}

