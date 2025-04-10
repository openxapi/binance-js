/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
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
 * @interface PmarginGetCmOrderV1Resp
 */
export interface PmarginGetCmOrderV1Resp {
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'avgPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'cumBase'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'origType'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'pair'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'price'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetCmOrderV1Resp
     */
    'updateTime'?: number;
}

