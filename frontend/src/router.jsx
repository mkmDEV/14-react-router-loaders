import { createBrowserRouter } from 'react-router-dom';

import {
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventsPage,
  EventsRootLayout,
  HomePage,
  NewEventPage,
  RootLayout,
} from '@pages';

import eventsLoader from '@loaders/eventsLoader.js';

export const router = createBrowserRouter([
  {
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ':id', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id/edit', element: <EditEventPage /> },
        ],
      },
    ],
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
]);
