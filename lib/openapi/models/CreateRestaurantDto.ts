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
 * @interface CreateRestaurantDto
 */
export interface CreateRestaurantDto {
    /**
     * 
     * @type {number}
     * @memberof CreateRestaurantDto
     */
    celebrityId: number;
    /**
     * 
     * @type {string}
     * @memberof CreateRestaurantDto
     */
    restaurantName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateRestaurantDto
     */
    restaurantPhone: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateRestaurantDto
     */
    restaurantMenu: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CreateRestaurantDto
     */
    startSeconds: number;
    /**
     * 
     * @type {string}
     * @memberof CreateRestaurantDto
     */
    youtubeVideoUrl: string;
    /**
     * 
     * @type {number}
     * @memberof CreateRestaurantDto
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof CreateRestaurantDto
     */
    longitude: number;
    /**
     * 
     * @type {string}
     * @memberof CreateRestaurantDto
     */
    externalMapLinkType: CreateRestaurantDtoExternalMapLinkTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateRestaurantDto
     */
    externalMapLinkUrl: string;
}


/**
 * @export
 */
export const CreateRestaurantDtoExternalMapLinkTypeEnum = {
    Naver: 'NAVER',
    Google: 'GOOGLE'
} as const;
export type CreateRestaurantDtoExternalMapLinkTypeEnum = typeof CreateRestaurantDtoExternalMapLinkTypeEnum[keyof typeof CreateRestaurantDtoExternalMapLinkTypeEnum];


/**
 * Check if a given object implements the CreateRestaurantDto interface.
 */
export function instanceOfCreateRestaurantDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "celebrityId" in value;
    isInstance = isInstance && "restaurantName" in value;
    isInstance = isInstance && "restaurantPhone" in value;
    isInstance = isInstance && "restaurantMenu" in value;
    isInstance = isInstance && "startSeconds" in value;
    isInstance = isInstance && "youtubeVideoUrl" in value;
    isInstance = isInstance && "latitude" in value;
    isInstance = isInstance && "longitude" in value;
    isInstance = isInstance && "externalMapLinkType" in value;
    isInstance = isInstance && "externalMapLinkUrl" in value;

    return isInstance;
}

export function CreateRestaurantDtoFromJSON(json: any): CreateRestaurantDto {
    return CreateRestaurantDtoFromJSONTyped(json, false);
}

export function CreateRestaurantDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRestaurantDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'celebrityId': json['celebrityId'],
        'restaurantName': json['restaurantName'],
        'restaurantPhone': json['restaurantPhone'],
        'restaurantMenu': json['restaurantMenu'],
        'startSeconds': json['startSeconds'],
        'youtubeVideoUrl': json['youtubeVideoUrl'],
        'latitude': json['latitude'],
        'longitude': json['longitude'],
        'externalMapLinkType': json['externalMapLinkType'],
        'externalMapLinkUrl': json['externalMapLinkUrl'],
    };
}

export function CreateRestaurantDtoToJSON(value?: CreateRestaurantDto | null): any {
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

