/* tslint:disable */
/* eslint-disable */
/**
 * Binance Portfolio Margin API
 * OpenAPI specification for Binance exchange - Pmargin API
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
 * @interface GetUmConditionalAllOrdersV1RespItem
 */
export interface GetUmConditionalAllOrdersV1RespItem {
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'activatePrice'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'bookTime'?: number;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'goodTillDate'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'newClientStrategyId'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'orderId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'origQty'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'positionSide'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'price'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'priceMatch'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'priceRate'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'reduceOnly'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'selfTradePreventionMode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'side'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'stopPrice'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'strategyId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'strategyStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'strategyType'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'timeInForce'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'triggerTime'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'type'?: string;
    /**
     * 
     * @type {number}
     * @memberof GetUmConditionalAllOrdersV1RespItem
     */
    'updateTime'?: number;
}

