/* tslint:disable */
/* eslint-disable */
/**
 * Binance Options API
 * OpenAPI specification for Binance exchange - Options API
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
 * @interface GetHistoryOrdersV1RespItem
 */
export interface GetHistoryOrdersV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'avgPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'createTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'executedQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'fee'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'mmp'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'optionSide'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'postOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'priceScale'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'quantity'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'quantityScale'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'quoteAsset'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'reason'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetHistoryOrdersV1RespItem
     */
    'updateTime'?: number;
}

