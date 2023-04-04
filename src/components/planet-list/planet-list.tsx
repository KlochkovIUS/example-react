import React, { useContext } from 'react';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import ItemList from '../item-list';

const PlanetList = ({ onItemSelected }: { onItemSelected: (id: string) => void }) => {
  const swapiService = useContext(SwapiServiceContext);
  if (!swapiService) return null;

  return <ItemList getData={swapiService.getAllPlanets} onItemSelected={onItemSelected} />;
};
PlanetList.propTypes = {};

export default PlanetList;
