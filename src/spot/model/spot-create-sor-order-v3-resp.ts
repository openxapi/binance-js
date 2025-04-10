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
import type { SpotCreateSorOrderV3RespFillsInner } from './spot-create-sor-order-v3-resp-fills-inner';

/**
 * 
 * @export
 * @interface SpotCreateSorOrderV3Resp
 */
export interface SpotCreateSorOrderV3Resp {
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {Array<SpotCreateSorOrderV3RespFillsInner>}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'fills'?: Array<SpotCreateSorOrderV3RespFillsInner>;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'origQuoteOrderQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'transactTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'usedSor'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'workingFloor'?: string;
    /**
     * 
     * @type {number}
     * @memberof SpotCreateSorOrderV3Resp
     */
    'workingTime'?: number;
}

