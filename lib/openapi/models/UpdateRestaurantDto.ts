/* tslint:disable */
/* eslint-disable */
/**
 * Celebrity Map
 * 유명인 맛지도 백오피스/앱 API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateRestaurantDto
 */
export interface UpdateRestaurantDto {
    /**
     * 
     * @type {number}
     * @memberof UpdateRestaurantDto
     */
    celebrityId?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateRestaurantDto
     */
    restaurantName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateRestaurantDto
     */
    restaurantPhone?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateRestaurantDto
     */
    restaurantMenu?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof UpdateRestaurantDto
     */
    startSeconds?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateRestaurantDto
     */
    youtubeVideoUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateRestaurantDto
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateRestaurantDto
     */
    longitude?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateRestaurantDto
     */
    externalMapLinkType?: UpdateRestaurantDtoExternalMapLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateRestaurantDto
     */
    externalMapLinkUrl?: string;
}


/**
 * @export
 */
export const UpdateRestaurantDtoExternalMapLinkTypeEnum = {
    Naver: 'NAVER',
    Google: 'GOOGLE'
} as const;
export type UpdateRestaurantDtoExternalMapLinkTypeEnum = typeof UpdateRestaurantDtoExternalMapLinkTypeEnum[keyof typeof UpdateRestaurantDtoExternalMapLinkTypeEnum];


/**
 * Check if a given object implements the UpdateRestaurantDto interface.
 */
export function instanceOfUpdateRestaurantDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRestaurantDtoFromJSON(json: any): UpdateRestaurantDto {
    return UpdateRestaurantDtoFromJSONTyped(json, false);
}

export function UpdateRestaurantDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRestaurantDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'celebrityId': !exists(json, 'celebrityId') ? undefined : json['celebrityId'],
        'restaurantName': !exists(json, 'restaurantName') ? undefined : json['restaurantName'],
        'restaurantPhone': !exists(json, 'restaurantPhone') ? undefined : json['restaurantPhone'],
        'restaurantMenu': !exists(json, 'restaurantMenu') ? undefined : json['restaurantMenu'],
        'startSeconds': !exists(json, 'startSeconds') ? undefined : json['startSeconds'],
        'youtubeVideoUrl': !exists(json, 'youtubeVideoUrl') ? undefined : json['youtubeVideoUrl'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'externalMapLinkType': !exists(json, 'externalMapLinkType') ? undefined : json['externalMapLinkType'],
        'externalMapLinkUrl': !exists(json, 'externalMapLinkUrl') ? undefined : json['externalMapLinkUrl'],
    };
}

export function UpdateRestaurantDtoToJSON(value?: UpdateRestaurantDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'celebrityId': value.celebrityId,
        'restaurantName': value.restaurantName,
        'restaurantPhone': value.restaurantPhone,
        'restaurantMenu': value.restaurantMenu,
        'startSeconds': value.startSeconds,
        'youtubeVideoUrl': value.youtubeVideoUrl,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'externalMapLinkType': value.externalMapLinkType,
        'externalMapLinkUrl': value.externalMapLinkUrl,
    };
}
