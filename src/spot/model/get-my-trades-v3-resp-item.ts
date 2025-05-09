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
 * @interface GetMyTradesV3RespItem
 */
export interface GetMyTradesV3RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'commission'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'commissionAsset'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMyTradesV3RespItem
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyTradesV3RespItem
     */
    'isBestMatch'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyTradesV3RespItem
     */
    'isBuyer'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetMyTradesV3RespItem
     */
    'isMaker'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetMyTradesV3RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetMyTradesV3RespItem
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'qty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'quoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMyTradesV3RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetMyTradesV3RespItem
     */
    'time'?: number;
}

