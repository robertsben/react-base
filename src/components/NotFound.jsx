import React from 'react'
import { Route } from 'react-router-dom';

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>Uh oh!</h1>
          <p>404 - Not Found</p>
        </div>
      )
    }}/>
  )
}

export default NotFound