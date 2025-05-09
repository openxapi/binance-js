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
import type { GetFiatPaymentsV1RespDataInner } from './get-fiat-payments-v1-resp-data-inner';

/**
 * 
 * @export
 * @interface GetFiatPaymentsV1Resp
 */
export interface GetFiatPaymentsV1Resp {
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1Resp
     */
    'code'?: string;
    /**
     * 
     * @type {Array<GetFiatPaymentsV1RespDataInner>}
     * @memberof GetFiatPaymentsV1Resp
     */
    'data'?: Array<GetFiatPaymentsV1RespDataInner>;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1Resp
     */
    'message'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetFiatPaymentsV1Resp
     */
    'success'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetFiatPaymentsV1Resp
     */
    'total'?: number;
}

