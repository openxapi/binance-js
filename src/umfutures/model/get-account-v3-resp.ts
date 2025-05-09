/* tslint:disable */
/* eslint-disable */
/**
 * Binance USD-M Futures API
 * OpenAPI specification for Binance exchange - Umfutures API
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
import type { GetAccountV3RespAssetsInner } from './get-account-v3-resp-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { GetAccountV3RespPositionsInner } from './get-account-v3-resp-positions-inner';

/**
 * 
 * @export
 * @interface GetAccountV3Resp
 */
export interface GetAccountV3Resp {
    /**
     * 
     * @type {Array<GetAccountV3RespAssetsInner>}
     * @memberof GetAccountV3Resp
     */
    'assets'?: Array<GetAccountV3RespAssetsInner>;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'availableBalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'maxWithdrawAmount'?: string;
    /**
     * 
     * @type {Array<GetAccountV3RespPositionsInner>}
     * @memberof GetAccountV3Resp
     */
    'positions'?: Array<GetAccountV3RespPositionsInner>;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalCrossUnPnl'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalCrossWalletBalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalMaintMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalMarginBalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalOpenOrderInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalPositionInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalUnrealizedProfit'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetAccountV3Resp
     */
    'totalWalletBalance'?: string;
}

