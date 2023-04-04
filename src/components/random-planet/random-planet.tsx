import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import { Planet } from '../../service/models';
import { sleep } from '../../utils/sleep';

const RandomPlanet = () => {
  const swapiService = useContext(SwapiServiceContext);
  const [planet, setPlanet] = useState<Planet>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    updatePlanet();
    const interval = setInterval(updatePlanet, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [swapiService]);

  const onPlanetLoaded = (planet: Planet) => {
    setLoading(false);
    setPlanet(planet);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    setLoading(true);
    if (swapiService) {
      swapiService
        .getPlanet(id.toString())
        .then(sleep(2000))
        .then(onPlanetLoaded)
        .catch(onError);
    } else {
      onError();
    }
  };

  const hasData = !(isLoading || isError);

  const errorMessage = isError ? <ErrorIndicator /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = hasData && planet ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const PlanetView = ({ planet }: { planet: Planet }) => {
  const { id, name, population, rotation_period, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation_period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RandomPlanet;
