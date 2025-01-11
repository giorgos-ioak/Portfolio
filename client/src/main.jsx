import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import MainLayoutWrapper from './components/Layouts/MainLayoutWrapper.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx';
import Achievements from './pages/Achievements/Achievements.jsx';
import AchievementDetails from './pages/AhvievementDetails/AhvievementDetails.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ErrorPage from './components/UI/ErrorPage/ErrorPage.jsx';
import Login from './components/UI/Login/Login.jsx';
import PortfolioInfo from './pages/Home/sections/PortfolioInfo/PortfolioInfo.jsx';
import MyCV from './pages/myCV/MyCV.jsx';
import Logout from './components/UI/Logout/Logout.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Loading from './components/UI/Loading/Loading.jsx';

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
    element:(
      <Suspense fallback={<Loading />}>
        <MainLayoutWrapper />
      </Suspense> 
    ),
    errorElement: <ErrorPage />,
    loader: dbData,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: '/projects/:projectId',
        element: <ProjectDetails />      
      },
      {
        path: 'achievements',
        element: <Achievements />
      },
      {
        path: 'achievements/:achievementId',
        element: <AchievementDetails />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'portfolio',
        element: <PortfolioInfo />,
      },
      {
        path: 'cv',
        element: <MyCV />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'logout',
        element: <Logout />
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
