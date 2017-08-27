import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )

render(App)

if (module.hot) console.log("hello")
if (module.hot) module.hot.accept('./components/App', () => {
  const NextApp = require('./components/App').default
  render(NextApp)
})
