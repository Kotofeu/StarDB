import React from 'react';
import classes from './Title.module.scss';

export default function Title({children, ...props}) {
  return (
    <h2 {...props} className={classes.MyTitle}>{children}</h2>
  )
}
