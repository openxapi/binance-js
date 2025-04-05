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
 * @interface PmarginCreateCmOrderV1Resp
 */
export interface PmarginCreateCmOrderV1Resp {
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'avgPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'cumBase'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'cumQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'pair'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'price'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginCreateCmOrderV1Resp
     */
    'updateTime'?: number;
}

