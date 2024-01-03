import { json, redirect } from 'react-router-dom';
import { authToken } from '@util/auth';

export default async ({ params, request }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
    headers: { Authorization: `Bearer ${authToken}` },
  });

  if (!response.ok) {
    throw json(
      { message: `Failed to delete event with id: ${id}` },
      { status: 500 }
    );
  }

  return redirect('/events');
};
