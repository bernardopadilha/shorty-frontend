import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@/pages/home'
import { PageLayout } from '@/layouts/page-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])