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
 * @interface GetCapitalDepositHisrecV1RespItem
 */
export interface GetCapitalDepositHisrecV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'addressTag'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'amount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'coin'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'completeTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'confirmTimes'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'id'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'insertTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'network'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'transferType'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'txId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'unlockConfirm'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetCapitalDepositHisrecV1RespItem
     */
    'walletType'?: number;
}

