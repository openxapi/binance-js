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
import type { GetSimpleEarnFlexibleHistoryCollateralRecordV1RespRowsInner } from './get-simple-earn-flexible-history-collateral-record-v1-resp-rows-inner';

/**
 * 
 * @export
 * @interface GetSimpleEarnFlexibleHistoryCollateralRecordV1Resp
 */
export interface GetSimpleEarnFlexibleHistoryCollateralRecordV1Resp {
    /**
     * 
     * @type {Array<GetSimpleEarnFlexibleHistoryCollateralRecordV1RespRowsInner>}
     * @memberof GetSimpleEarnFlexibleHistoryCollateralRecordV1Resp
     */
    'rows'?: Array<GetSimpleEarnFlexibleHistoryCollateralRecordV1RespRowsInner>;
    /**
     * 
     * @type {string}
     * @memberof GetSimpleEarnFlexibleHistoryCollateralRecordV1Resp
     */
    'total'?: string;
}

