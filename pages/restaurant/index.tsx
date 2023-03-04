import { RestaurantListPage } from '@/lib/restaurant/RestaurantListPage';
import { Provider } from 'jotai';
import { AdminContent } from '../../lib/layout/AdminContent';

const Restaurant = () => {
  return (
    <AdminContent>
      <Provider>
        <RestaurantListPage />
      </Provider>
    </AdminContent>
  );
};

export default Restaurant;
