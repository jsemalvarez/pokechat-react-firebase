import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'

import '../styles/global.css'
import { Provider } from 'react-redux'
import store from './state/store'

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}
