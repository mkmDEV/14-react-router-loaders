import { json, redirect } from 'react-router-dom';

export default async ({ request, params }) => {
  const data = await request.formData();
  const eventData = {
    date: data.get('date'),
    description: data.get('description'),
    image: data.get('image'),
    title: data.get('title'),
  };

  const url = `http://localhost:8080/events${
    request.method === 'PATCH' ? `/${params.id}` : ''
  }`;

  const response = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) return response;

  if (!response.ok)
    throw json({ message: 'Could not save event.' }, { status: 500 });

  return redirect('/events');
};
