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
import type { GetDciProductPositionsV1RespListInner } from './get-dci-product-positions-v1-resp-list-inner';

/**
 * 
 * @export
 * @interface GetDciProductPositionsV1Resp
 */
export interface GetDciProductPositionsV1Resp {
    /**
     * 
     * @type {Array<GetDciProductPositionsV1RespListInner>}
     * @memberof GetDciProductPositionsV1Resp
     */
    'list'?: Array<GetDciProductPositionsV1RespListInner>;
    /**
     * 
     * @type {number}
     * @memberof GetDciProductPositionsV1Resp
     */
    'total'?: number;
}

