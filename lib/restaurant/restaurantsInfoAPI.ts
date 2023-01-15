import { restaurantsInfoAtom } from "./restaurantInfo";
import { atom } from "jotai";

export const submitRestaurantsInfoAtom = atom(null, (_get, set) => {
  const data = _get(restaurantsInfoAtom);
  // set(re)
})
