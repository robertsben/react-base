import React from 'react'
import Counter from '../components/Counter'
import Layout from '../components/Layout'

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Counter/>
      </Layout>
    )
  }
}
