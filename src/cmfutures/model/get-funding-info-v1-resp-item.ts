/* tslint:disable */
/* eslint-disable */
/**
 * Binance COIN-M Futures API
 * OpenAPI specification for Binance exchange - Cmfutures API
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
 * @interface GetFundingInfoV1RespItem
 */
export interface GetFundingInfoV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetFundingInfoV1RespItem
     */
    'adjustedFundingRateCap'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFundingInfoV1RespItem
     */
    'adjustedFundingRateFloor'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetFundingInfoV1RespItem
     */
    'disclaimer'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetFundingInfoV1RespItem
     */
    'fundingIntervalHours'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetFundingInfoV1RespItem
     */
    'symbol'?: string;
}

