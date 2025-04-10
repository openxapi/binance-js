/* tslint:disable */
/* eslint-disable */
/**
 * Binance Margin Trading API
 * OpenAPI specification for Binance exchange - Margin API
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
import type { MarginCreateMarginOrderOcoV1RespOrdersInner } from './margin-create-margin-order-oco-v1-resp-orders-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { MarginDeleteMarginOrderListV1RespOrderReportsInner } from './margin-delete-margin-order-list-v1-resp-order-reports-inner';

/**
 * 
 * @export
 * @interface MarginDeleteMarginOrderListV1Resp
 */
export interface MarginDeleteMarginOrderListV1Resp {
    /**
     * 
     * @type {string}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'contingencyType'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'isIsolated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'listClientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'listOrderStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'listStatusType'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {Array<MarginDeleteMarginOrderListV1RespOrderReportsInner>}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'orderReports'?: Array<MarginDeleteMarginOrderListV1RespOrderReportsInner>;
    /**
     * 
     * @type {Array<MarginCreateMarginOrderOcoV1RespOrdersInner>}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'orders'?: Array<MarginCreateMarginOrderOcoV1RespOrdersInner>;
    /**
     * 
     * @type {string}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginDeleteMarginOrderListV1Resp
     */
    'transactionTime'?: number;
}

