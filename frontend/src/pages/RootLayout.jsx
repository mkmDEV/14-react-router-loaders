import { Outlet } from 'react-router-dom';

import { MainNavigation } from '@components';

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
