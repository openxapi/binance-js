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
 * @interface GetBrokerSubAccountApiV1RespItem
 */
export interface GetBrokerSubAccountApiV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountApiV1RespItem
     */
    'apikey'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetBrokerSubAccountApiV1RespItem
     */
    'canTrade'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetBrokerSubAccountApiV1RespItem
     */
    'futuresTrade'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetBrokerSubAccountApiV1RespItem
     */
    'marginTrade'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountApiV1RespItem
     */
    'subaccountId'?: string;
}

