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
import type { GetSimpleEarnLockedPositionV1RespRowsInner } from './get-simple-earn-locked-position-v1-resp-rows-inner';

/**
 * 
 * @export
 * @interface GetSimpleEarnLockedPositionV1Resp
 */
export interface GetSimpleEarnLockedPositionV1Resp {
    /**
     * 
     * @type {Array<GetSimpleEarnLockedPositionV1RespRowsInner>}
     * @memberof GetSimpleEarnLockedPositionV1Resp
     */
    'rows'?: Array<GetSimpleEarnLockedPositionV1RespRowsInner>;
    /**
     * 
     * @type {number}
     * @memberof GetSimpleEarnLockedPositionV1Resp
     */
    'total'?: number;
}

