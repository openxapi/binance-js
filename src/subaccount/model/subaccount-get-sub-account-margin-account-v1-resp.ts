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
import type { SubaccountGetManagedSubaccountMarginAssetV1RespUserAssetsInner } from './subaccount-get-managed-subaccount-margin-asset-v1-resp-user-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { SubaccountGetSubAccountMarginAccountV1RespMarginTradeCoeffVo } from './subaccount-get-sub-account-margin-account-v1-resp-margin-trade-coeff-vo';

/**
 * 
 * @export
 * @interface SubaccountGetSubAccountMarginAccountV1Resp
 */
export interface SubaccountGetSubAccountMarginAccountV1Resp {
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'marginLevel'?: string;
    /**
     * 
     * @type {SubaccountGetSubAccountMarginAccountV1RespMarginTradeCoeffVo}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'marginTradeCoeffVo'?: SubaccountGetSubAccountMarginAccountV1RespMarginTradeCoeffVo;
    /**
     * 
     * @type {Array<SubaccountGetManagedSubaccountMarginAssetV1RespUserAssetsInner>}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'marginUserAssetVoList'?: Array<SubaccountGetManagedSubaccountMarginAssetV1RespUserAssetsInner>;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'totalAssetOfBtc'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'totalLiabilityOfBtc'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountMarginAccountV1Resp
     */
    'totalNetAssetOfBtc'?: string;
}

