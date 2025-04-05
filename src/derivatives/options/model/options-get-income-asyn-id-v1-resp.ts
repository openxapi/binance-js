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



/**
 * 
 * @export
 * @interface OptionsGetIncomeAsynIdV1Resp
 */
export interface OptionsGetIncomeAsynIdV1Resp {
    /**
     * 
     * @type {string}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'downloadId'?: string;
    /**
     * 
     * @type {number}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'expirationTimestamp'?: number;
    /**
     * 
     * @type {object}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'isExpired'?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'notified'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof OptionsGetIncomeAsynIdV1Resp
     */
    'url'?: string;
}

