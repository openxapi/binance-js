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
 * @interface MarginGetMarginCrossMarginDataV1RespItem
 */
export interface MarginGetMarginCrossMarginDataV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'borrowLimit'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'borrowable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'coin'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'dailyInterest'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'marginablePairs'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'transferIn'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'vipLevel'?: number;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginCrossMarginDataV1RespItem
     */
    'yearlyInterest'?: string;
}

