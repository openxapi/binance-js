/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
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
import type { PmarginCreateMarginOrderOcoV1RespOrdersInner } from './pmargin-create-margin-order-oco-v1-resp-orders-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { PmarginDeleteMarginOrderListV1RespOrderReportsInner } from './pmargin-delete-margin-order-list-v1-resp-order-reports-inner';

/**
 * 
 * @export
 * @interface PmarginDeleteMarginOrderListV1Resp
 */
export interface PmarginDeleteMarginOrderListV1Resp {
    /**
     * 
     * @type {string}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'contingencyType'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'listClientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'listOrderStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'listStatusType'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'orderListId'?: number;
    /**
     * 
     * @type {Array<PmarginDeleteMarginOrderListV1RespOrderReportsInner>}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'orderReports'?: Array<PmarginDeleteMarginOrderListV1RespOrderReportsInner>;
    /**
     * 
     * @type {Array<PmarginCreateMarginOrderOcoV1RespOrdersInner>}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'orders'?: Array<PmarginCreateMarginOrderOcoV1RespOrdersInner>;
    /**
     * 
     * @type {string}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginDeleteMarginOrderListV1Resp
     */
    'transactionTime'?: number;
}

