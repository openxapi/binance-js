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
 * @interface CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
 */
export interface CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem {
    /**
     * 
     * @type {number}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'origClientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'quantity'?: string;
    /**
     * 
     * @type {number}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'recvWindow'?: number;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'side': string;
    /**
     * 
     * @type {string}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'symbol': string;
    /**
     * 
     * @type {number}
     * @memberof CmfuturesUpdateBatchOrdersV1ReqBatchOrdersItem
     */
    'timestamp': number;
}

