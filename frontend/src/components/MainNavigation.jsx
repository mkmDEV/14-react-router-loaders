import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import { NewsletterSignup } from '@components';

const MainNavigation = () => (
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={'/'}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to={'/events'}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Newsletter
          </NavLink>
        </li>
      </ul>
    </nav>
    <NewsletterSignup />
  </header>
);

export default MainNavigation;
