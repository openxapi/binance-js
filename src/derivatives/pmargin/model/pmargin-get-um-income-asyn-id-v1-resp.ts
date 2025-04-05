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
 * @interface PmarginGetUmIncomeAsynIdV1Resp
 */
export interface PmarginGetUmIncomeAsynIdV1Resp {
    /**
     * 
     * @type {string}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'downloadId'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'expirationTimestamp'?: number;
    /**
     * 
     * @type {object}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'isExpired'?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'notified'?: boolean;
    /**
     * 
     * @type {object}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    's3Link'?: object | null;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetUmIncomeAsynIdV1Resp
     */
    'url'?: string;
}

