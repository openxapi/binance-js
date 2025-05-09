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
 * @interface UmfuturesDeleteBatchOrdersV1RespItem
 */
export interface UmfuturesDeleteBatchOrdersV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'activatePrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'closePosition'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'cumQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'cumQuote'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'executedQty'?: string;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'goodTillDate'?: number;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'origType'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'priceMatch'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'priceProtect'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'priceRate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'updateTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof UmfuturesDeleteBatchOrdersV1RespItem
     */
    'workingType'?: string;
}

