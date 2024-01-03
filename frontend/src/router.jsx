import { createBrowserRouter } from 'react-router-dom';

import {
  EditEventPage,
  ErrorPage,
  EventDetailPage,
  EventsPage,
  EventsRootLayout,
  HomePage,
  NewEventPage,
  NewsletterPage,
  RootLayout,
} from '@pages';

import eventsLoader from '@loaders/eventsLoader.js';
import detailLoader from '@loaders/eventDetailLoader.js';
import manipulateEventAction from '@actions/newEventAction.js';
import deleteEventAction from '@actions/deleteEventAction.js';
import newsletterAction from '@actions/newsletterAction.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ':id',
            id: 'event',
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
