/* tslint:disable */
/* eslint-disable */
/**
 * Binance Margin Trading API
 * OpenAPI specification for Binance exchange - Margin API
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
import type { MarginGetMarginIsolatedMarginDataV1RespItemDataInner } from './margin-get-margin-isolated-margin-data-v1-resp-item-data-inner';

/**
 * 
 * @export
 * @interface MarginGetMarginIsolatedMarginDataV1RespItem
 */
export interface MarginGetMarginIsolatedMarginDataV1RespItem {
    /**
     * 
     * @type {Array<MarginGetMarginIsolatedMarginDataV1RespItemDataInner>}
     * @memberof MarginGetMarginIsolatedMarginDataV1RespItem
     */
    'data'?: Array<MarginGetMarginIsolatedMarginDataV1RespItemDataInner>;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginDataV1RespItem
     */
    'leverage'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginGetMarginIsolatedMarginDataV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginGetMarginIsolatedMarginDataV1RespItem
     */
    'vipLevel'?: number;
}

