import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { EventsList } from '@components';
import { Spinner } from '@UI/Spinner.jsx';

export const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};
