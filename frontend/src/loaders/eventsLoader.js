import { json } from 'react-router-dom';

export default async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    return response;
  }
};
