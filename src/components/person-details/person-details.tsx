import React, { useContext } from 'react';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import ItemDetails from '../item-details';
import ItemDetailsRecord from '../item-details-record';

const PersonDetails = ({ itemId }: { itemId: string | undefined }) => {
  const swapiService = useContext(SwapiServiceContext);
  if (!swapiService) return null;

  return (
    <ItemDetails
      itemId={itemId}
      getData={swapiService.getPerson}
      getImageUrl={swapiService.getPersonImage}
    >
      <ItemDetailsRecord field="gender" label="Gender" />
      <ItemDetailsRecord field="eye_color" label="Eye Color" />
    </ItemDetails>
  );
};

export default PersonDetails;
