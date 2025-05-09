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
import type { GetSimpleEarnFlexibleListV1RespRowsInnerTierAnnualPercentageRate } from './get-simple-earn-flexible-list-v1-resp-rows-inner-tier-annual-percentage-rate';

/**
 * 
 * @export
 * @interface GetSimpleEarnFlexiblePositionV1RespRowsInner
 */
export interface GetSimpleEarnFlexiblePositionV1RespRowsInner {
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'airDropAsset'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'asset'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'autoSubscribe'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'canRedeem'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'collateralAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'cumulativeBonusRewards'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'cumulativeRealTimeRewards'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'cumulativeTotalRewards'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'latestAnnualPercentageRate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'productId'?: string;
    /**
     * 
     * @type {GetSimpleEarnFlexibleListV1RespRowsInnerTierAnnualPercentageRate}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'tierAnnualPercentageRate'?: GetSimpleEarnFlexibleListV1RespRowsInnerTierAnnualPercentageRate;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'totalAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'yesterdayAirdropPercentageRate'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexiblePositionV1RespRowsInner
     */
    'yesterdayRealTimeRewards'?: string;
}

