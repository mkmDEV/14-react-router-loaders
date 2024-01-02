import { Outlet } from 'react-router-dom';

import { EventsNavigation } from '@components';

export const EventsRootLayout = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);
