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
 * @interface GetOpenOrderV1Resp
 */
export interface GetOpenOrderV1Resp {
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'activatePrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'avgPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetOpenOrderV1Resp
     */
    'closePosition'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'cumQuote'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOpenOrderV1Resp
     */
    'goodTillDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetOpenOrderV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'origType'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'priceMatch'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetOpenOrderV1Resp
     */
    'priceProtect'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'priceRate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetOpenOrderV1Resp
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOpenOrderV1Resp
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOpenOrderV1Resp
     */
    'updateTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOpenOrderV1Resp
     */
    'workingType'?: string;
}

