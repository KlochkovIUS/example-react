import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import PersonPage from '../pages';
import StarshipPage from '../pages/starship-page';
import PlanetPage from '../pages/planet-page';
import App from '../components/app/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'people/:id?',
        element: <PersonPage />
      },
      {
        path: 'starships/:id?',
        element: <StarshipPage />
      },
      {
        path: 'planets/:id?',
        element: <PlanetPage />
      }
    ]
  }
]);

export default router;
