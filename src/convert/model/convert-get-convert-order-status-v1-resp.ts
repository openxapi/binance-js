/* tslint:disable */
/* eslint-disable */
/**
 * Binance Convert API
 * OpenAPI specification for Binance exchange - Convert API
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
 * @interface ConvertGetConvertOrderStatusV1Resp
 */
export interface ConvertGetConvertOrderStatusV1Resp {
    /**
     * 
     * @type {number}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'createTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'fromAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'fromAsset'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'inverseRatio'?: string;
    /**
     * 
     * @type {number}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'orderStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'ratio'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'toAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertGetConvertOrderStatusV1Resp
     */
    'toAsset'?: string;
}

