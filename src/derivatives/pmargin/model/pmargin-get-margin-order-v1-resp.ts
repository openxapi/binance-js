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
 * @interface PmarginGetMarginOrderV1Resp
 */
export interface PmarginGetMarginOrderV1Resp {
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'accountId'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'isWorking'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {object}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'preventedMatchId'?: object | null;
    /**
     * 
     * @type {object}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'preventedQuantity'?: object | null;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOrderV1Resp
     */
    'updateTime'?: number;
}

