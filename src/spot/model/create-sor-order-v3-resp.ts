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
import type { CreateSorOrderV3RespFillsInner } from './create-sor-order-v3-resp-fills-inner';

/**
 * 
 * @export
 * @interface CreateSorOrderV3Resp
 */
export interface CreateSorOrderV3Resp {
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'clientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'cummulativeQuoteQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'executedQty'?: string;
    /**
     * 
     * @type {Array<CreateSorOrderV3RespFillsInner>}
     * @memberof CreateSorOrderV3Resp
     */
    'fills'?: Array<CreateSorOrderV3RespFillsInner>;
    /**
     * 
     * @type {number}
     * @memberof CreateSorOrderV3Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSorOrderV3Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'origQuoteOrderQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSorOrderV3Resp
     */
    'transactTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSorOrderV3Resp
     */
    'usedSor'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateSorOrderV3Resp
     */
    'workingFloor'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSorOrderV3Resp
     */
    'workingTime'?: number;
}

