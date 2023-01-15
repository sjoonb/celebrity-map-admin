import { atom } from 'jotai';
import { v4 as uuid } from 'uuid';

export interface RestaurantInfo {
  id: string;
  channelId: string;
  youtubeLink: string;
  videoStartMinute: number | null;
  videoStartSecond: number | null;
  menus: string[];
  naverId: string;
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
    naverId: 'https://youtu.be/zrLdC7aYy64',
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
    naverId: 'sample2',
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
    naverId: 'sample3',
    restaurantName: 'sample3',
    phoneNumber: 'sample3',
    latitude: 'sample3',
    longitude: 'sample3',
  },
];

export const restaurantsInfoAtom = atom<RestaurantInfo[]>([]);

export const sortedRestaurantsInfoAtom = atom((get) => {
  const restaurantsInfo = get(restaurantsInfoAtom);

  return restaurantsInfo.sort((a, b) => {
    return a.channelId > b.channelId ? -1 : 1;
  });
});

const serializedRestaurantsInfoKey = 'serializedRestaurantsInfo';

export const restaurantsInfoReducer = atom<
  null,
  | { type: 'duplicate'; restaurantInfo: RestaurantInfo; index: number }
  | { type: 'remove'; restaurantInfo: RestaurantInfo;}
  | { type: 'serialize' }
  | { type: 'deserialize' }
>(null, (_get, set, action) => {
  if (action.type === 'duplicate') {
    const duplicatedInfo = { ...action.restaurantInfo };
    duplicatedInfo.id = uuid();
    const prev = _get(restaurantsInfoAtom);

    set(restaurantsInfoAtom, [
      ...prev.slice(0, action.index),
      duplicatedInfo,
      ...prev.slice(action.index),
    ]);
  } else if (action.type === 'remove') {
    const prev = _get(restaurantsInfoAtom);
    
    set(restaurantsInfoAtom, 
      prev.filter((info) => info !== action.restaurantInfo)
     );
  } else if (action.type === 'serialize') {
    const restaurantsInfo = _get(restaurantsInfoAtom);
    const obj = {
      restaurantsInfo,
    };
    const value = JSON.stringify(obj);
    localStorage.setItem(serializedRestaurantsInfoKey, value);
  } else if (action.type === 'deserialize') {
    const value = localStorage.getItem(serializedRestaurantsInfoKey);
    if (!value) {
      return;
    }
    const obj = JSON.parse(value);
    set(restaurantsInfoAtom, obj.restaurantsInfo);
  }
});

// export const serializeRestaurantsInfoAtom = atom<
//   null,
//   | { type: 'duplicate'; restaurantInfo: RestaurantInfo; index: number }
//   | { type: 'serialize'; callback: (value: string) => void }
//   | { type: 'deserialize'; value: string }
// >(null, (get, set, action) => {
//   console.log('action: ', action.type);
//   if (action.type === 'duplicate') {
//     console.log('duplicate called');
//     const duplicatedInfo = { ...action.restaurantInfo };
//     duplicatedInfo.id = uuid();
//     const prev = get(restaurantsInfoAtom);
//     set(restaurantsInfoAtom, [
//       ...prev.slice(0, action.index),
//       duplicatedInfo,
//       ...prev.slice(action.index),
//     ]);
//   } else if (action.type === 'serialize') {
//     const restaurantsInfo = get(restaurantsInfoAtom);
//     const obj = {
//       restaurantsInfo,
//     };
//     action.callback(JSON.stringify(obj));
//   } else if (action.type === 'deserialize') {
//     const obj = JSON.parse(action.value);
//     set(restaurantsInfoAtom, obj.restaurantsInfo);
//   }
// });
