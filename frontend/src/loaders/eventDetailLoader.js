import { defer, json } from 'react-router-dom';

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    const { event } = await response.json();
    return event;
  }
}

export default async ({ params }) =>
  defer({ event: await loadEvent(params.id) });
