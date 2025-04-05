/* tslint:disable */
/* eslint-disable */
/**
 * Binance Sub Account API
 * OpenAPI specification for Binance exchange - Subaccount API
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
 * @interface SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
 */
export interface SubaccountGetSubAccountTransferSubUserHistoryV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'asset'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'counterParty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'fromAccountType'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'qty'?: string;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'time'?: number;
    /**
     * 
     * @type {string}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'toAccountType'?: string;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'tranId'?: number;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountTransferSubUserHistoryV1RespItem
     */
    'type'?: number;
}

