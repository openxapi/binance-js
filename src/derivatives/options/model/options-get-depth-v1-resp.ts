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
 * @interface OptionsGetDepthV1Resp
 */
export interface OptionsGetDepthV1Resp {
    /**
     * 
     * @type {number}
     * @memberof OptionsGetDepthV1Resp
     */
    'T'?: number;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof OptionsGetDepthV1Resp
     */
    'asks'?: Array<Array<string>>;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof OptionsGetDepthV1Resp
     */
    'bids'?: Array<Array<string>>;
    /**
     * 
     * @type {number}
     * @memberof OptionsGetDepthV1Resp
     */
    'u'?: number;
}

