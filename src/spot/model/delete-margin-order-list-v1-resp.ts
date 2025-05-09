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


// May contain unused imports in some cases
// @ts-ignore
import type { CreateMarginOrderOcoV1RespOrdersInner } from './create-margin-order-oco-v1-resp-orders-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DeleteMarginOrderListV1RespOrderReportsInner } from './delete-margin-order-list-v1-resp-order-reports-inner';

/**
 * 
 * @export
 * @interface DeleteMarginOrderListV1Resp
 */
export interface DeleteMarginOrderListV1Resp {
    /**
     * 
     * @type {string}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'contingencyType'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'isIsolated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'listClientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'listOrderStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'listStatusType'?: string;
    /**
     * 
     * @type {number}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {Array<DeleteMarginOrderListV1RespOrderReportsInner>}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'orderReports'?: Array<DeleteMarginOrderListV1RespOrderReportsInner>;
    /**
     * 
     * @type {Array<CreateMarginOrderOcoV1RespOrdersInner>}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'orders'?: Array<CreateMarginOrderOcoV1RespOrdersInner>;
    /**
     * 
     * @type {string}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof DeleteMarginOrderListV1Resp
     */
    'transactionTime'?: number;
}

