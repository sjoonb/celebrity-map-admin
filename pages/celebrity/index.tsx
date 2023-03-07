import { ProtectedRoute } from '@/lib/auth/ProtectedRoute';
import { CelebrityPage } from '@/lib/celebrity/CelebrityPage';
import { Provider } from 'jotai';
import { AdminContent } from '../../lib/layout/AdminContent';

const Celebrity = () => {
  return (
    <AdminContent>
      <Provider>
        <CelebrityPage />
      </Provider>
    </AdminContent>
  );
};

export default Celebrity;
