/* tslint:disable */
/* eslint-disable */
/**
 * Binance Spot API
 * OpenAPI specification for Binance exchange - Spot API
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
 * @interface SpotGetAllOrdersV3RespItem
 */
export interface SpotGetAllOrdersV3RespItem {
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'isWorking'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'origQuoteOrderQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'updateTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof SpotGetAllOrdersV3RespItem
     */
    'workingTime'?: number;
}

