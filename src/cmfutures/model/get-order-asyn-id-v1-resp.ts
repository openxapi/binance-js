/* tslint:disable */
/* eslint-disable */
/**
 * Binance COIN-M Futures API
 * OpenAPI specification for Binance exchange - Cmfutures API
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
 * @interface GetOrderAsynIdV1Resp
 */
export interface GetOrderAsynIdV1Resp {
    /**
     * 
     * @type {string}
     * @memberof GetOrderAsynIdV1Resp
     */
    'downloadId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOrderAsynIdV1Resp
     */
    'expirationTimestamp'?: number;
    /**
     * 
     * @type {object}
     * @memberof GetOrderAsynIdV1Resp
     */
    'isExpired'?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetOrderAsynIdV1Resp
     */
    'notified'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetOrderAsynIdV1Resp
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOrderAsynIdV1Resp
     */
    'url'?: string;
}

