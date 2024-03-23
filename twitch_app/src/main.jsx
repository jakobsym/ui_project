import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import './index.css'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AnalyticPage from './pages/AnalyticPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/analytics',
    element: <AnalyticPage />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
