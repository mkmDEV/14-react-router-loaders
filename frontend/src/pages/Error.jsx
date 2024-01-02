import { useRouteError } from 'react-router-dom';

import { MainNavigation, PageContent } from '@components';
export const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred.',
    message = 'Something went wrong...';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }
  console.log({ error });
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};
