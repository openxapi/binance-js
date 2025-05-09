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
import type { GetPayTransactionsV1RespDataInner } from './get-pay-transactions-v1-resp-data-inner';

/**
 * 
 * @export
 * @interface GetPayTransactionsV1Resp
 */
export interface GetPayTransactionsV1Resp {
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1Resp
     */
    'code'?: string;
    /**
     * 
     * @type {Array<GetPayTransactionsV1RespDataInner>}
     * @memberof GetPayTransactionsV1Resp
     */
    'data'?: Array<GetPayTransactionsV1RespDataInner>;
    /**
     * 
     * @type {string}
     * @memberof GetPayTransactionsV1Resp
     */
    'message'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetPayTransactionsV1Resp
     */
    'success'?: boolean;
}

