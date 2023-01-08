import { createClient } from 'urql';

export const urqlClient = createClient({
  url: 'https://pcmap-api.place.naver.com/graphql',
});

export const NaverPlaceRestaurantInfoQuery = `
  query getValue($id: String!) {
    business: restaurant(id: $id, isNx: true, deviceType: "mobile") {
      base {
        name
        virtualPhone     
        phone
        coordinate {
          x
          y
        }
      }
    }
  }
`;
