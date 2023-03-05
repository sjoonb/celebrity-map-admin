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


import * as runtime from '../runtime';
import type {
  CelebrityEntity,
  CreateCelebrityDto,
  UpdateCelebrityDto,
} from '../models';
import {
    CelebrityEntityFromJSON,
    CelebrityEntityToJSON,
    CreateCelebrityDtoFromJSON,
    CreateCelebrityDtoToJSON,
    UpdateCelebrityDtoFromJSON,
    UpdateCelebrityDtoToJSON,
} from '../models';

export interface DeleteCelebrityRequest {
    id: number;
}

export interface GetCelebrityRequest {
    id: number;
    updateCelebrityDto: UpdateCelebrityDto;
}

export interface PostCelebrityRequest {
    createCelebrityDto: CreateCelebrityDto;
}

/**
 * 
 */
export class CelebritiesApi extends runtime.BaseAPI {

    /**
     * 
     */
    async deleteCelebrityRaw(requestParameters: DeleteCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCelebrity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/celebrities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     */
    async deleteCelebrity(requestParameters: DeleteCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCelebrityRaw(requestParameters, initOverrides);
    }

    /**
     * 
     */
    async getCelebritiesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CelebrityEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/celebrities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CelebrityEntityFromJSON));
    }

    /**
     * 
     */
    async getCelebrities(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CelebrityEntity>> {
        const response = await this.getCelebritiesRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async getCelebrityRaw(requestParameters: GetCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCelebrity.');
        }

        if (requestParameters.updateCelebrityDto === null || requestParameters.updateCelebrityDto === undefined) {
            throw new runtime.RequiredError('updateCelebrityDto','Required parameter requestParameters.updateCelebrityDto was null or undefined when calling getCelebrity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/celebrities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCelebrityDtoToJSON(requestParameters.updateCelebrityDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     */
    async getCelebrity(requestParameters: GetCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCelebrityRaw(requestParameters, initOverrides);
    }

    /**
     * 
     */
    async postCelebrityRaw(requestParameters: PostCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createCelebrityDto === null || requestParameters.createCelebrityDto === undefined) {
            throw new runtime.RequiredError('createCelebrityDto','Required parameter requestParameters.createCelebrityDto was null or undefined when calling postCelebrity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/celebrities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCelebrityDtoToJSON(requestParameters.createCelebrityDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     */
    async postCelebrity(requestParameters: PostCelebrityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCelebrityRaw(requestParameters, initOverrides);
    }

}