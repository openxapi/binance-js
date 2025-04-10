/* tslint:disable */
/* eslint-disable */
/**
 * Binance Options API
 * OpenAPI specification for Binance exchange - Options API
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
import type { OptionsCreateBlockOrderCreateV1RespLegsInner } from './options-create-block-order-create-v1-resp-legs-inner';

/**
 * 
 * @export
 * @interface OptionsUpdateBlockOrderCreateV1Resp
 */
export interface OptionsUpdateBlockOrderCreateV1Resp {
    /**
     * 
     * @type {string}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'blockTradeSettlementKey'?: string;
    /**
     * 
     * @type {number}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'createTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'expireTime'?: number;
    /**
     * 
     * @type {Array<OptionsCreateBlockOrderCreateV1RespLegsInner>}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'legs'?: Array<OptionsCreateBlockOrderCreateV1RespLegsInner>;
    /**
     * 
     * @type {string}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'liquidity'?: string;
    /**
     * 
     * @type {string}
     * @memberof OptionsUpdateBlockOrderCreateV1Resp
     */
    'status'?: string;
}

