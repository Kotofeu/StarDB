import React from 'react'
import { Link } from 'react-router-dom'

export default function Error({message}) {
    return (
        <div className='error'>
          <h3 children={message} className='error__title'/>
          <Link className='error__home' to='/' >Home</Link>
        </div>
      )
}
