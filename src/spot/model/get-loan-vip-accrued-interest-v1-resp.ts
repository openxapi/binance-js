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
import type { GetLoanVipAccruedInterestV1RespRowsInner } from './get-loan-vip-accrued-interest-v1-resp-rows-inner';

/**
 * 
 * @export
 * @interface GetLoanVipAccruedInterestV1Resp
 */
export interface GetLoanVipAccruedInterestV1Resp {
    /**
     * 
     * @type {Array<GetLoanVipAccruedInterestV1RespRowsInner>}
     * @memberof GetLoanVipAccruedInterestV1Resp
     */
    'rows'?: Array<GetLoanVipAccruedInterestV1RespRowsInner>;
    /**
     * 
     * @type {number}
     * @memberof GetLoanVipAccruedInterestV1Resp
     */
    'total'?: number;
}

