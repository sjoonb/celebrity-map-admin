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
 * @interface CelebrityEntity
 */
export interface CelebrityEntity {
    /**
     * 
     * @type {number}
     * @memberof CelebrityEntity
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    celebrityName: string;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    celebrityPhone: string;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    channelName: string;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    markerOnImage: string;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    markerOffImage: string;
    /**
     * 
     * @type {string}
     * @memberof CelebrityEntity
     */
    profileImage: string;
    /**
     * 
     * @type {Date}
     * @memberof CelebrityEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CelebrityEntity
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the CelebrityEntity interface.
 */
export function instanceOfCelebrityEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "celebrityName" in value;
    isInstance = isInstance && "celebrityPhone" in value;
    isInstance = isInstance && "channelName" in value;
    isInstance = isInstance && "markerOnImage" in value;
    isInstance = isInstance && "markerOffImage" in value;
    isInstance = isInstance && "profileImage" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function CelebrityEntityFromJSON(json: any): CelebrityEntity {
    return CelebrityEntityFromJSONTyped(json, false);
}

export function CelebrityEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): CelebrityEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'celebrityName': json['celebrityName'],
        'celebrityPhone': json['celebrityPhone'],
        'channelName': json['channelName'],
        'markerOnImage': json['markerOnImage'],
        'markerOffImage': json['markerOffImage'],
        'profileImage': json['profileImage'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function CelebrityEntityToJSON(value?: CelebrityEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'celebrityName': value.celebrityName,
        'celebrityPhone': value.celebrityPhone,
        'channelName': value.channelName,
        'markerOnImage': value.markerOnImage,
        'markerOffImage': value.markerOffImage,
        'profileImage': value.profileImage,
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
    };
}
