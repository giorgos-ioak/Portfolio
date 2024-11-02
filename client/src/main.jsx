import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import Home from './pages/Home.jsx';

import { loader as dbData } from './pages/Home.jsx';


import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store.js';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: dbData
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
