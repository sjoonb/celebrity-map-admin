import { RestaurantPage } from '@/lib/restaurant/RestaurantPage';
import { Provider } from 'jotai';
import { AdminContent } from '../../lib/layout/AdminContent';

const Restaurant = () => {
  return (
    <AdminContent>
      <Provider>
        <RestaurantPage />
      </Provider>
    </AdminContent>
  );
};

export default Restaurant;
