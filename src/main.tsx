import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import HomePage from './pages/home.tsx';
import About from './pages/about.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "/about",
        element: <About/>
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
