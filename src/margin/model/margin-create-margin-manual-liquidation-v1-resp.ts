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



/**
 * 
 * @export
 * @interface MarginCreateMarginManualLiquidationV1Resp
 */
export interface MarginCreateMarginManualLiquidationV1Resp {
    /**
     * 
     * @type {string}
     * @memberof MarginCreateMarginManualLiquidationV1Resp
     */
    'asset'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginCreateMarginManualLiquidationV1Resp
     */
    'interest'?: string;
    /**
     * 
     * @type {string}
     * @memberof MarginCreateMarginManualLiquidationV1Resp
     */
    'liabilityAsset'?: string;
    /**
     * 
     * @type {number}
     * @memberof MarginCreateMarginManualLiquidationV1Resp
     */
    'liabilityQty'?: number;
    /**
     * 
     * @type {string}
     * @memberof MarginCreateMarginManualLiquidationV1Resp
     */
    'principal'?: string;
}

