import classes from './PageContent.module.css';
export const PageContent = ({ title, children }) => (
  <div className={classes.content}>
    <h1>{title}</h1>
    {children}
  </div>
);
