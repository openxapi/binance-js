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
import type { GetSimpleEarnFlexiblePositionV1RespRowsInner } from './get-simple-earn-flexible-position-v1-resp-rows-inner';

/**
 * 
 * @export
 * @interface GetSimpleEarnFlexiblePositionV1Resp
 */
export interface GetSimpleEarnFlexiblePositionV1Resp {
    /**
     * 
     * @type {Array<GetSimpleEarnFlexiblePositionV1RespRowsInner>}
     * @memberof GetSimpleEarnFlexiblePositionV1Resp
     */
    'rows'?: Array<GetSimpleEarnFlexiblePositionV1RespRowsInner>;
    /**
     * 
     * @type {number}
     * @memberof GetSimpleEarnFlexiblePositionV1Resp
     */
    'total'?: number;
}

