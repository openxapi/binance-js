/* tslint:disable */
/* eslint-disable */
/**
 * Binance Margin Trading API
 * OpenAPI specification for Binance exchange - Margin API
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
 * @interface MarginGetMarginIsolatedMarginTierV1RespItem
 */
export interface MarginGetMarginIsolatedMarginTierV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'baseAssetMaxBorrowable'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'effectiveMultiple'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'initialRiskRatio'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'liquidationRiskRatio'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'quoteAssetMaxBorrowable'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginIsolatedMarginTierV1RespItem
     */
    'tier'?: number;
}

