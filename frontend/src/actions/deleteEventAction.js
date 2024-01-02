import { json, redirect } from 'react-router-dom';

export default async ({ params, request }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: `Failed to delete event with id: ${id}` },
      { status: 500 }
    );
  }

  return redirect('/events');
};
