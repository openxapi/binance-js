/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
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
import type { PmarginGetCmOrderAmendmentV1RespItemAmendmentOrigQty } from './pmargin-get-cm-order-amendment-v1-resp-item-amendment-orig-qty';

/**
 * 
 * @export
 * @interface PmarginGetCmOrderAmendmentV1RespItemAmendment
 */
export interface PmarginGetCmOrderAmendmentV1RespItemAmendment {
    /**
     * 
     * @type {number}
     * @memberof PmarginGetCmOrderAmendmentV1RespItemAmendment
     */
    'count'?: number;
    /**
     * 
     * @type {PmarginGetCmOrderAmendmentV1RespItemAmendmentOrigQty}
     * @memberof PmarginGetCmOrderAmendmentV1RespItemAmendment
     */
    'origQty'?: PmarginGetCmOrderAmendmentV1RespItemAmendmentOrigQty;
    /**
     * 
     * @type {PmarginGetCmOrderAmendmentV1RespItemAmendmentOrigQty}
     * @memberof PmarginGetCmOrderAmendmentV1RespItemAmendment
     */
    'price'?: PmarginGetCmOrderAmendmentV1RespItemAmendmentOrigQty;
}

