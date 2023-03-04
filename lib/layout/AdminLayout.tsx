import { x } from '@xstyled/emotion';
import { AdminHeader } from './AdminHeader';

export const AdminLayout = (page: any) => (
  <x.div w="100%" overflowX="auto" minWidth="600px">
    <AdminHeader />
    {page}
  </x.div>
);
