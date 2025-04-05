/* tslint:disable */
/* eslint-disable */
/**
 * Binance Spot API
 * OpenAPI specification for Binance exchange - Spot API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { SpotCreateOrderTestV3RespDiscount } from './spot-create-order-test-v3-resp-discount';
// May contain unused imports in some cases
// @ts-ignore
import type { SpotCreateOrderTestV3RespStandardCommissionForOrder } from './spot-create-order-test-v3-resp-standard-commission-for-order';

/**
 * 
 * @export
 * @interface SpotCreateSorOrderTestV3Resp
 */
export interface SpotCreateSorOrderTestV3Resp {
    /**
     * 
     * @type {SpotCreateOrderTestV3RespDiscount}
     * @memberof SpotCreateSorOrderTestV3Resp
     */
    'discount'?: SpotCreateOrderTestV3RespDiscount;
    /**
     * 
     * @type {SpotCreateOrderTestV3RespStandardCommissionForOrder}
     * @memberof SpotCreateSorOrderTestV3Resp
     */
    'standardCommissionForOrder'?: SpotCreateOrderTestV3RespStandardCommissionForOrder;
    /**
     * 
     * @type {SpotCreateOrderTestV3RespStandardCommissionForOrder}
     * @memberof SpotCreateSorOrderTestV3Resp
     */
    'taxCommissionForOrder'?: SpotCreateOrderTestV3RespStandardCommissionForOrder;
}

