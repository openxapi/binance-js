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
import type { SubaccountGetSubAccountFuturesAccountSummaryV1RespSubAccountListInner } from './subaccount-get-sub-account-futures-account-summary-v1-resp-sub-account-list-inner';

/**
 * 
 * @export
 * @interface SubaccountGetSubAccountFuturesAccountSummaryV1Resp
 */
export interface SubaccountGetSubAccountFuturesAccountSummaryV1Resp {
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'asset'?: string;
    /**
     * 
     * @type {Array<SubaccountGetSubAccountFuturesAccountSummaryV1RespSubAccountListInner>}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'subAccountList'?: Array<SubaccountGetSubAccountFuturesAccountSummaryV1RespSubAccountListInner>;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalMaintenanceMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalMarginBalance'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalOpenOrderInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalPositionInitialMargin'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalUnrealizedProfit'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountFuturesAccountSummaryV1Resp
     */
    'totalWalletBalance'?: string;
}

