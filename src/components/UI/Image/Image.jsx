import React from 'react'
import classes from './Image.module.scss';

export default function Image({src}) {
  return (
    <img className={classes.MyImage} src={src} alt=''/>
  )
}
