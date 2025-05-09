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


// May contain unused imports in some cases
// @ts-ignore
import type { GetPayTransactionsV1RespDataInnerReceiverInfoExtend } from './get-pay-transactions-v1-resp-data-inner-receiver-info-extend';

/**
 * 
 * @export
 * @interface GetPayTransactionsV1RespDataInnerReceiverInfo
 */
export interface GetPayTransactionsV1RespDataInnerReceiverInfo {
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'accountId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'binanceId'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'countryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'email'?: string;
    /**
     * 
     * @type {GetPayTransactionsV1RespDataInnerReceiverInfoExtend}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'extend'?: GetPayTransactionsV1RespDataInnerReceiverInfoExtend;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'mobileCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1RespDataInnerReceiverInfo
     */
    'type'?: string;
}

