import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import { MainNavigation } from '@components';
import { getTokenDuration } from '@util/auth.js';

export const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout' });
      return;
    }

    console.log(getTokenDuration());

    setTimeout(() => {
      submit(null, { action: '/logout' });
    }, getTokenDuration());
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
