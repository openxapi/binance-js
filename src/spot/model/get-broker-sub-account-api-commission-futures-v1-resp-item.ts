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
 * @interface GetBrokerSubAccountApiCommissionFuturesV1RespItem
 */
export interface GetBrokerSubAccountApiCommissionFuturesV1RespItem {
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountApiCommissionFuturesV1RespItem
     */
    'makerCommission'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountApiCommissionFuturesV1RespItem
     */
    'subAccountId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountApiCommissionFuturesV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountApiCommissionFuturesV1RespItem
     */
    'takerCommission'?: number;
}

