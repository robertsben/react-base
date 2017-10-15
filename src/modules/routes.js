import Counter from '../components/Counter'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes