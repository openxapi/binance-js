/* tslint:disable */
/* eslint-disable */
/**
 * Binance Algorithmic Trading API
 * OpenAPI specification for Binance exchange - Algo API
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
import type { AlgoGetAlgoSpotHistoricalOrdersV1RespOrdersInner } from './algo-get-algo-spot-historical-orders-v1-resp-orders-inner';

/**
 * 
 * @export
 * @interface AlgoGetAlgoSpotOpenOrdersV1Resp
 */
export interface AlgoGetAlgoSpotOpenOrdersV1Resp {
    /**
     * 
     * @type {Array<AlgoGetAlgoSpotHistoricalOrdersV1RespOrdersInner>}
     * @memberof AlgoGetAlgoSpotOpenOrdersV1Resp
     */
    'orders'?: Array<AlgoGetAlgoSpotHistoricalOrdersV1RespOrdersInner>;
    /**
     * 
     * @type {number}
     * @memberof AlgoGetAlgoSpotOpenOrdersV1Resp
     */
    'total'?: number;
}

