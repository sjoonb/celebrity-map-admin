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
 * @interface CreateCelebrityDto
 */
export interface CreateCelebrityDto {
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    celebrityName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    celebrityPhone: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    channelName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    profileImage: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    markerOnImage: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCelebrityDto
     */
    markerOffImage: string;
}

/**
 * Check if a given object implements the CreateCelebrityDto interface.
 */
export function instanceOfCreateCelebrityDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "celebrityName" in value;
    isInstance = isInstance && "celebrityPhone" in value;
    isInstance = isInstance && "channelName" in value;
    isInstance = isInstance && "profileImage" in value;
    isInstance = isInstance && "markerOnImage" in value;
    isInstance = isInstance && "markerOffImage" in value;

    return isInstance;
}

export function CreateCelebrityDtoFromJSON(json: any): CreateCelebrityDto {
    return CreateCelebrityDtoFromJSONTyped(json, false);
}

export function CreateCelebrityDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCelebrityDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'celebrityName': json['celebrityName'],
        'celebrityPhone': json['celebrityPhone'],
        'channelName': json['channelName'],
        'profileImage': json['profileImage'],
        'markerOnImage': json['markerOnImage'],
        'markerOffImage': json['markerOffImage'],
    };
}

export function CreateCelebrityDtoToJSON(value?: CreateCelebrityDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'celebrityName': value.celebrityName,
        'celebrityPhone': value.celebrityPhone,
        'channelName': value.channelName,
        'profileImage': value.profileImage,
        'markerOnImage': value.markerOnImage,
        'markerOffImage': value.markerOffImage,
    };
}

