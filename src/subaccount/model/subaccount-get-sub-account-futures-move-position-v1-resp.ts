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
import type { SubaccountGetSubAccountFuturesMovePositionV1RespFutureMovePositionOrderVoListInner } from './subaccount-get-sub-account-futures-move-position-v1-resp-future-move-position-order-vo-list-inner';

/**
 * 
 * @export
 * @interface SubaccountGetSubAccountFuturesMovePositionV1Resp
 */
export interface SubaccountGetSubAccountFuturesMovePositionV1Resp {
    /**
     * 
     * @type {Array<SubaccountGetSubAccountFuturesMovePositionV1RespFutureMovePositionOrderVoListInner>}
     * @memberof SubaccountGetSubAccountFuturesMovePositionV1Resp
     */
    'futureMovePositionOrderVoList'?: Array<SubaccountGetSubAccountFuturesMovePositionV1RespFutureMovePositionOrderVoListInner>;
    /**
     * 
     * @type {number}
     * @memberof SubaccountGetSubAccountFuturesMovePositionV1Resp
     */
    'total'?: number;
}

