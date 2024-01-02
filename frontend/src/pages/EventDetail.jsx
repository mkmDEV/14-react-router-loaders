import { useLoaderData } from 'react-router-dom';

import { EventItem } from '@components';

export const EventDetailPage = () => {
  const { event } = useLoaderData();

  return <EventItem event={event} />;
};
