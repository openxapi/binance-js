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
 * @interface GetMarginDelistScheduleV1RespItem
 */
export interface GetMarginDelistScheduleV1RespItem {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetMarginDelistScheduleV1RespItem
     */
    'crossMarginAssets'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof GetMarginDelistScheduleV1RespItem
     */
    'delistTime'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetMarginDelistScheduleV1RespItem
     */
    'isolatedMarginSymbols'?: Array<string>;
}

