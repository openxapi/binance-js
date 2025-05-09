/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
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
 * @interface GetMarginOrderV1Resp
 */
export interface GetMarginOrderV1Resp {
    /**
     * 
     * @type {number}
     * @memberof GetMarginOrderV1Resp
     */
    'accountId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'icebergQty'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetMarginOrderV1Resp
     */
    'isWorking'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetMarginOrderV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {object}
     * @memberof GetMarginOrderV1Resp
     */
    'preventedMatchId'?: object | null;
    /**
     * 
     * @type {object}
     * @memberof GetMarginOrderV1Resp
     */
    'preventedQuantity'?: object | null;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMarginOrderV1Resp
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginOrderV1Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMarginOrderV1Resp
     */
    'updateTime'?: number;
}

