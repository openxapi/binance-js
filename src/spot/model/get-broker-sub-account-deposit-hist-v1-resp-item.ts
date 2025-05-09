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
 * @interface GetBrokerSubAccountDepositHistV1RespItem
 */
export interface GetBrokerSubAccountDepositHistV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'addressTag'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'amount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'coin'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'confirmTimes'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'depositId'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'insertTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'network'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'selfReturnStatus'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'sourceAddress'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'status'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'subAccountId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'transferType'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'travelRuleStatus'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetBrokerSubAccountDepositHistV1RespItem
     */
    'txId'?: string;
}

