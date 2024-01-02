import { useRouteLoaderData } from 'react-router-dom';

import { EventForm } from '@components';

export const EditEventPage = () => {
  const { event } = useRouteLoaderData('event');
  return <EventForm method={'patch'} event={event} />;
};
