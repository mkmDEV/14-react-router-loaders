import classes from './Spinner.module.css';
export const Spinner = () => (
  <div className={classes.spinner} data-layer="4">
    <div className={classes['spinner-container']}>
      <div className={classes['spinner-rotator']}>
        <div className={classes['spinner-left']}>
          <div className={classes['spinner-circle']} />
        </div>
        <div className={classes['spinner-right']}>
          <div className={classes['spinner-circle']} />
        </div>
      </div>
    </div>
  </div>
);
