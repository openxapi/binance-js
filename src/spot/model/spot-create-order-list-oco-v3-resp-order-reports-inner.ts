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
 * @interface SpotCreateOrderListOcoV3RespOrderReportsInner
 */
export interface SpotCreateOrderListOcoV3RespOrderReportsInner {
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'origQuoteOrderQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'transactTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateOrderListOcoV3RespOrderReportsInner
     */
    'workingTime'?: number;
}

