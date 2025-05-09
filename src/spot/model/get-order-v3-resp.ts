/* tslint:disable */
/* eslint-disable */
/**
 * Binance Spot API
 * OpenAPI specification for Binance exchange - Spot API
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
 * @interface GetOrderV3Resp
 */
export interface GetOrderV3Resp {
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetOrderV3Resp
     */
    'isWorking'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetOrderV3Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetOrderV3Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'origQuoteOrderQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOrderV3Resp
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderV3Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOrderV3Resp
     */
    'updateTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetOrderV3Resp
     */
    'workingTime'?: number;
}

