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
 * @interface PmarginGetCmPositionRiskV1RespItem
 */
export interface PmarginGetCmPositionRiskV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'entryPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'leverage'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'liquidationPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'markPrice'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'maxQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'notionalValue'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'positionAmt'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'unRealizedProfit'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetCmPositionRiskV1RespItem
     */
    'updateTime'?: number;
}

