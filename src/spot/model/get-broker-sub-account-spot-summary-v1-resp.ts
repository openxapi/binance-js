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
import type { GetBrokerSubAccountSpotSummaryV1RespDataInner } from './get-broker-sub-account-spot-summary-v1-resp-data-inner';

/**
 * 
 * @export
 * @interface GetBrokerSubAccountSpotSummaryV1Resp
 */
export interface GetBrokerSubAccountSpotSummaryV1Resp {
    /**
     * 
     * @type {Array<GetBrokerSubAccountSpotSummaryV1RespDataInner>}
     * @memberof GetBrokerSubAccountSpotSummaryV1Resp
     */
    'data'?: Array<GetBrokerSubAccountSpotSummaryV1RespDataInner>;
    /**
     * 
     * @type {number}
     * @memberof GetBrokerSubAccountSpotSummaryV1Resp
     */
    'timestamp'?: number;
}

