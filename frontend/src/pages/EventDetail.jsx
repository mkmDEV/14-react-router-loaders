import { useRouteLoaderData } from 'react-router-dom';

import { EventItem } from '@components';

export const EventDetailPage = () => {
  const { event } = useRouteLoaderData('event');

  return <EventItem event={event} />;
};
