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



/**
 * 
 * @export
 * @interface PmarginGetUmAccountConfigV1Resp
 */
export interface PmarginGetUmAccountConfigV1Resp {
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'canDeposit'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'canTrade'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'canWithdraw'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'dualSidePosition'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'feeTier'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'multiAssetsMargin'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'tradeGroupId'?: number;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetUmAccountConfigV1Resp
     */
    'updateTime'?: number;
}

