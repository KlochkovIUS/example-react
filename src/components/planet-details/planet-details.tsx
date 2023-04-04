import React, { useContext } from 'react';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import ItemDetails from '../item-details';
import ItemDetailsRecord from '../item-details-record';

const PlanetDetails = ({ itemId }: { itemId: string | undefined }) => {
  const swapiService = useContext(SwapiServiceContext);
  if (!swapiService) return null;

  return (
    <ItemDetails itemId={itemId} getData={swapiService.getPlanet} getImageUrl={swapiService.getPlanetImage}>
      <ItemDetailsRecord field="population" label="Population" />
      <ItemDetailsRecord field="rotation_period" label="Rotation Period" />
      <ItemDetailsRecord field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

PlanetDetails.propTypes = {};

export default PlanetDetails;
