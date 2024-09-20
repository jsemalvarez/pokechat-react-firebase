import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'

import '../styles/global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
