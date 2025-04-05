/* tslint:disable */
/* eslint-disable */
/**
 * Binance Sub Account API
 * OpenAPI specification for Binance exchange - Subaccount API
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
import type { SubaccountGetSubAccountFuturesAccountV1RespAssetsInner } from './subaccount-get-sub-account-futures-account-v1-resp-assets-inner';

/**
 * 
 * @export
 * @interface SubaccountGetSubAccountFuturesAccountV1Resp
 */
export interface SubaccountGetSubAccountFuturesAccountV1Resp {
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'asset'?: string;
    /**
     * 
     * @type {Array<SubaccountGetSubAccountFuturesAccountV1RespAssetsInner>}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'assets'?: Array<SubaccountGetSubAccountFuturesAccountV1RespAssetsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'canDeposit'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'canTrade'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'canWithdraw'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'email'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'feeTier'?: number;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'maxWithdrawAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalMaintenanceMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalMarginBalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalOpenOrderInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalPositionInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalUnrealizedProfit'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'totalWalletBalance'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountFuturesAccountV1Resp
     */
    'updateTime'?: number;
}

