import { Configuration, RestaurantsApi } from '../openapi';

export const restaurantsApi = new RestaurantsApi(
  new Configuration({ basePath: process.env.NEXT_PUBLIC_BASE_API_PATH })
);
