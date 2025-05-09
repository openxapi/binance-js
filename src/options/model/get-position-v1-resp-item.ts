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
 * @interface GetPositionV1RespItem
 */
export interface GetPositionV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'entryPrice'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetPositionV1RespItem
     */
    'expiryDate'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'markPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'markValue'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'optionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'positionCost'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetPositionV1RespItem
     */
    'priceScale'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'quantity'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetPositionV1RespItem
     */
    'quantityScale'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'quoteAsset'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'reducibleQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'ror'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'strikePrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPositionV1RespItem
     */
    'unrealizedPNL'?: string;
}

