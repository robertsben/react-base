import React from 'react'
import Counter from '../components/counter'
import Layout from '../components/layout'

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Counter/>
      </Layout>
    )
  }
}
