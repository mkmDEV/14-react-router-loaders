import { defer, json } from 'react-router-dom';

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const { events } = await response.json();
    return events;
  }
};

export default () => defer({ events: loadEvents() });
