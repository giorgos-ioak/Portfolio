import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import MainLayout from './components/Layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';

import { loader as dbData } from './components/Layouts/MainLayout.jsx';


import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store.js';



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: dbData,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
