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
 * @interface MarginGetMarginInterestRateHistoryV1RespItem
 */
export interface MarginGetMarginInterestRateHistoryV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginInterestRateHistoryV1RespItem
     */
    'asset'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginInterestRateHistoryV1RespItem
     */
    'dailyInterestRate'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginInterestRateHistoryV1RespItem
     */
    'timestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginInterestRateHistoryV1RespItem
     */
    'vipLevel'?: number;
}

