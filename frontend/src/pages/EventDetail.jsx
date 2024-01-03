import { Suspense } from 'react';
import { Await, useLoaderData, useRouteLoaderData } from 'react-router-dom';

import { EventItem, EventsList } from '@components';
import { Spinner } from '@UI/Spinner.jsx';

export const EventDetailPage = () => {
  const { event } = useRouteLoaderData('event');
  const { events } = useLoaderData();

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};
