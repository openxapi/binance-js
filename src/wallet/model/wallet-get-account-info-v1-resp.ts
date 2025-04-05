/* tslint:disable */
/* eslint-disable */
/**
 * Binance Wallet API
 * OpenAPI specification for Binance exchange - Wallet API
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
 * @interface WalletGetAccountInfoV1Resp
 */
export interface WalletGetAccountInfoV1Resp {
    /**
     * 
     * @type {boolean}
     * @memberof WalletGetAccountInfoV1Resp
     */
    'isFutureEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WalletGetAccountInfoV1Resp
     */
    'isMarginEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WalletGetAccountInfoV1Resp
     */
    'isOptionsEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WalletGetAccountInfoV1Resp
     */
    'isPortfolioMarginRetailEnabled'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WalletGetAccountInfoV1Resp
     */
    'vipLevel'?: number;
}

