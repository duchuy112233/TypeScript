import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not Found</h2>
      <Link to='/' className='nav-link'>
        Go to back Home 
      </Link>
    </div>
  )
}

export default NotFound