import { createBrowserRouter } from 'react-router-dom';

import {
  AuthPage,
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

import authAction from '@actions/authAction.js';
import deleteEventAction from '@actions/deleteEventAction.js';
import manipulateEventAction from '@actions/newEventAction.js';
import newsletterAction from '@actions/newsletterAction.js';
import logout from '@actions/logoutAction.js';

import { authToken, checkAuth } from '@util/auth.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader() {
      return authToken();
    },
    children: [
      { index: true, element: <HomePage /> },
      { path: 'auth', element: <AuthPage />, action: authAction },
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
                loader: eventsLoader,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuth,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuth,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      { path: 'logout', action: logout },
    ],
  },
]);
