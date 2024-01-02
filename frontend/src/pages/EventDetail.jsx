import { Link, useParams } from 'react-router-dom';

export const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event ID: {params.id}</p>
      <p>
        <Link relative={'path'} to={'..'}>
          Back to Events
        </Link>
      </p>
    </>
  );
};
