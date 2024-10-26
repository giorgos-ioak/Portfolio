import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import Home from './pages/Home.jsx';

import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
