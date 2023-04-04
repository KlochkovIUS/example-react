import React, { useState } from 'react';
import SwapiService from '../../service/swapi-service';
import DummySwapiService from '../../service/dummy-swapi-service';
import { ISwapiService } from '../../service/models';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import Header from '../header';
import { Outlet } from 'react-router-dom';
import RandomPlanet from '../random-planet';
import './App.css';

function App() {
  const [swapiService, setSwapiService] = useState<ISwapiService>(
    new SwapiService()
  );

  const onServiceChange = () => {
    const Service =
      swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
    setSwapiService(new Service());
  };

  return (
    <SwapiServiceContext.Provider value={swapiService}>
      <div className="stardb-app container">
        <Header onServiceChange={onServiceChange} />
        <RandomPlanet />
        <Outlet />
      </div>
    </SwapiServiceContext.Provider>
  );
}

export default App;
