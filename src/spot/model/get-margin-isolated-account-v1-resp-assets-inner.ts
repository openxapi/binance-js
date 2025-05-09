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
import type { GetMarginIsolatedAccountV1RespAssetsInnerBaseAsset } from './get-margin-isolated-account-v1-resp-assets-inner-base-asset';

/**
 * 
 * @export
 * @interface GetMarginIsolatedAccountV1RespAssetsInner
 */
export interface GetMarginIsolatedAccountV1RespAssetsInner {
    /**
     * 
     * @type {GetMarginIsolatedAccountV1RespAssetsInnerBaseAsset}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'baseAsset'?: GetMarginIsolatedAccountV1RespAssetsInnerBaseAsset;
    /**
     * 
     * @type {boolean}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'indexPrice'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'isolatedCreated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'liquidatePrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'liquidateRate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'marginLevel'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'marginLevelStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'marginRatio'?: string;
    /**
     * 
     * @type {GetMarginIsolatedAccountV1RespAssetsInnerBaseAsset}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'quoteAsset'?: GetMarginIsolatedAccountV1RespAssetsInnerBaseAsset;
    /**
     * 
     * @type {string}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'symbol'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetMarginIsolatedAccountV1RespAssetsInner
     */
    'tradeEnabled'?: boolean;
}

