import React, { Component } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../modules/routes'

export default class App extends Component {
  render() {
    return (
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    )
  }
}
