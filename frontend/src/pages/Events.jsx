import { useLoaderData } from 'react-router-dom';

import { EventsList } from '@components';
export const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return <EventsList events={events} />;
};
