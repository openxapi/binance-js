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


// May contain unused imports in some cases
// @ts-ignore
import type { SubaccountGetManagedSubaccountInfoV1RespManagerSubUserInfoVoListInner } from './subaccount-get-managed-subaccount-info-v1-resp-manager-sub-user-info-vo-list-inner';

/**
 * 
 * @export
 * @interface SubaccountGetManagedSubaccountInfoV1Resp
 */
export interface SubaccountGetManagedSubaccountInfoV1Resp {
    /**
     * 
     * @type {Array<SubaccountGetManagedSubaccountInfoV1RespManagerSubUserInfoVoListInner>}
     * @memberof SubaccountGetManagedSubaccountInfoV1Resp
     */
    'managerSubUserInfoVoList'?: Array<SubaccountGetManagedSubaccountInfoV1RespManagerSubUserInfoVoListInner>;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetManagedSubaccountInfoV1Resp
     */
    'total'?: number;
}

