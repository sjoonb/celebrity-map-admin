import { atom } from 'jotai';

export interface RestaurantInfo {
  id: string;
  channelId: string;
  youtubeLink: string;
  videoStartMinute: number | null;
  videoStartSecond: number | null;
  menus: string[];
  naverLink: string;
  restaurantName: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
}

const sampleRestaurantInfoData: RestaurantInfo[] = [
  {
    id: '008cbff2-ac5c-4b76-968b-b0d0a07e5730',
    channelId: 'poongja',
    youtubeLink: 'https://youtu.be/zrLdC7aYy64',
    videoStartMinute: 10,
    videoStartSecond: 32,
    menus: ['a', 'b'],
    naverLink: 'https://youtu.be/zrLdC7aYy64',
    restaurantName: 'sample1',
    phoneNumber: 'sample1',
    latitude: '32.3',
    longitude: '126.5',
  },
  {
    id: '924715a4-c1e4-4d8a-b7a4-f872415a1cac',

    channelId: 'sungsikyung',
    youtubeLink: 'https://~',
    videoStartMinute: 10,
    videoStartSecond: 32,
    menus: ['a', 'b'],
    naverLink: 'sample2',
    restaurantName: 'sample2',
    phoneNumber: 'sample2',
    latitude: 'sample2',
    longitude: 'sample2',
  },
  {
    id: 'e673309b-900e-40ce-9c42-0ddc01d4e0e8',
    channelId: 'poongja',
    youtubeLink: 'https://~',
    videoStartMinute: 10,
    videoStartSecond: 32,
    menus: ['a', 'b'],
    naverLink: 'sample3',
    restaurantName: 'sample3',
    phoneNumber: 'sample3',
    latitude: 'sample3',
    longitude: 'sample3',
  },
];

export const restaurantsInfoAtom = atom<RestaurantInfo[]>([]);

export const sortedRestaurantsInfoAtom =  atom((get) => {
  const restaurantsInfo = get(restaurantsInfoAtom);

  return restaurantsInfo.sort((a, b) => (a.channelId > b.channelId ? -1 : 1));
})

export const serializeRestaurantsInfoAtom = atom<
  null,
  | { type: 'serialize'; callback: (value: string) => void }
  | { type: 'deserialize'; value: string }
>(null, (get, set, action) => {
  if (action.type === 'serialize') {
    const restaurantsInfo = get(restaurantsInfoAtom);
    const obj = {
      restaurantsInfo
    }
    action.callback(JSON.stringify(obj))
  } else if (action.type === 'deserialize') {
    const obj = JSON.parse(action.value)
    set(restaurantsInfoAtom, obj.restaurantsInfo)
  }
})

