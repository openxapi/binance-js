/* tslint:disable */
/* eslint-disable */
/**
 * Binance USD-M Futures API
 * OpenAPI specification for Binance exchange - Umfutures API
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
 * @interface UmfuturesGetDepthV1Resp
 */
export interface UmfuturesGetDepthV1Resp {
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetDepthV1Resp
     */
    'E'?: number;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetDepthV1Resp
     */
    'T'?: number;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof UmfuturesGetDepthV1Resp
     */
    'asks'?: Array<Array<string>>;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof UmfuturesGetDepthV1Resp
     */
    'bids'?: Array<Array<string>>;
    /**
     * 
     * @type {number}
     * @memberof UmfuturesGetDepthV1Resp
     */
    'lastUpdateId'?: number;
}

