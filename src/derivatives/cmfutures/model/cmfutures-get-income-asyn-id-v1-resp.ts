/* tslint:disable */
/* eslint-disable */
/**
 * Binance COIN-M Futures API
 * OpenAPI specification for Binance exchange - Cmfutures API
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
 * @interface CmfuturesGetIncomeAsynIdV1Resp
 */
export interface CmfuturesGetIncomeAsynIdV1Resp {
    /**
     * 
     * @type {string}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'downloadId'?: string;
    /**
     * 
     * @type {number}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'expirationTimestamp'?: number;
    /**
     * 
     * @type {object}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'isExpired'?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'notified'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesGetIncomeAsynIdV1Resp
     */
    'url'?: string;
}

