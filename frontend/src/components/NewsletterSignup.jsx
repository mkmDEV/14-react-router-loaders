import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

export const NewsletterSignup = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data?.message) {
      alert(data.message);
    }
  }, [data, state]);

  return (
    /***  Always use fetcher when want to use an action
     without navigating to the route which uses */
    <fetcher.Form
      method="post"
      action={'/newsletter'}
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
};
