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

/**
 * 
 * @export
 * @interface PmarginGetMarginOpenOrderListV1RespItem
 */
export interface PmarginGetMarginOpenOrderListV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'contingencyType'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'listClientOrderId'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'listOrderStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'listStatusType'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'orderListId'?: number;
    /**
     * 
     * @type {Array<PmarginCreateMarginOrderOcoV1RespOrdersInner>}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'orders'?: Array<PmarginCreateMarginOrderOcoV1RespOrdersInner>;
    /**
     * 
     * @type {string}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof PmarginGetMarginOpenOrderListV1RespItem
     */
    'transactionTime'?: number;
}

