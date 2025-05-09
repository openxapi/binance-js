/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreateMarginRepayDebtV1Resp
 */
export interface CreateMarginRepayDebtV1Resp {
    /**
     * 
     * @type {string}
     * @memberof CreateMarginRepayDebtV1Resp
     */
    'amount'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMarginRepayDebtV1Resp
     */
    'asset'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateMarginRepayDebtV1Resp
     */
    'specifyRepayAssets'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateMarginRepayDebtV1Resp
     */
    'success'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateMarginRepayDebtV1Resp
     */
    'updateTime'?: number;
}

