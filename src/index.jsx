import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/ClientApp'

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )

render(App)

if (module.hot) module.hot.accept('./containers/ClientApp', () => {
  const NextApp = require('./containers/ClientApp').default
  render(NextApp)
})
