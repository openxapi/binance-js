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
import type { GetMiningPaymentOtherV1RespDataOtherProfitsInner } from './get-mining-payment-other-v1-resp-data-other-profits-inner';

/**
 * 
 * @export
 * @interface GetMiningPaymentOtherV1RespData
 */
export interface GetMiningPaymentOtherV1RespData {
    /**
     * 
     * @type {Array<GetMiningPaymentOtherV1RespDataOtherProfitsInner>}
     * @memberof GetMiningPaymentOtherV1RespData
     */
    'otherProfits'?: Array<GetMiningPaymentOtherV1RespDataOtherProfitsInner>;
    /**
     * 
     * @type {number}
     * @memberof GetMiningPaymentOtherV1RespData
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetMiningPaymentOtherV1RespData
     */
    'totalNum'?: number;
}

