/* tslint:disable */
/* eslint-disable */
/**
 * Binance Spot API
 * OpenAPI specification for Binance exchange - Spot API
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
 * @interface GetFiatPaymentsV1RespDataInner
 */
export interface GetFiatPaymentsV1RespDataInner {
    /**
     * 
     * @type {number}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'createTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'cryptoCurrency'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'fiatCurrency'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'obtainAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'orderNo'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'paymentMethod'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'sourceAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'totalFee'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetFiatPaymentsV1RespDataInner
     */
    'updateTime'?: number;
}

