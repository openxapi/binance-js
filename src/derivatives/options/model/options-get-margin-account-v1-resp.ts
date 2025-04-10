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
import type { OptionsGetAccountV1RespGreekInner } from './options-get-account-v1-resp-greek-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { OptionsGetMarginAccountV1RespAssetInner } from './options-get-margin-account-v1-resp-asset-inner';

/**
 * 
 * @export
 * @interface OptionsGetMarginAccountV1Resp
 */
export interface OptionsGetMarginAccountV1Resp {
    /**
     * 
     * @type {Array<OptionsGetMarginAccountV1RespAssetInner>}
     * @memberof OptionsGetMarginAccountV1Resp
     */
    'asset'?: Array<OptionsGetMarginAccountV1RespAssetInner>;
    /**
     * 
     * @type {Array<OptionsGetAccountV1RespGreekInner>}
     * @memberof OptionsGetMarginAccountV1Resp
     */
    'greek'?: Array<OptionsGetAccountV1RespGreekInner>;
    /**
     * 
     * @type {number}
     * @memberof OptionsGetMarginAccountV1Resp
     */
    'time'?: number;
}

