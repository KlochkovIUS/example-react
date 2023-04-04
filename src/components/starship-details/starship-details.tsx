import React, { useContext } from 'react';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import ItemDetails from '../item-details';
import ItemDetailsRecord from '../item-details-record';

const StarshipDetails = ({ itemId }: { itemId: string | undefined }) => {
  const swapiService = useContext(SwapiServiceContext);
  if (!swapiService) return null;

  return (
    <ItemDetails itemId={itemId} getData={swapiService.getStarship} getImageUrl={swapiService.getStarshipImage}>
      <ItemDetailsRecord field="model" label="Model" />
      <ItemDetailsRecord field="length" label="Length" />
      <ItemDetailsRecord field="cost_in_credits" label="Cost" />
    </ItemDetails>
  );
};

export default StarshipDetails;
