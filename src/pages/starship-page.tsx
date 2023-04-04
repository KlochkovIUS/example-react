import React from 'react';
import Row from '../components/row';
import StarshipList from '../components/starship-list/starship-list';
import StarshipDetails from '../components/starship-details/starship-details';
import {
  withNavigationById,
  WithNavigationById
} from '../hoc/withNavigationById';

const StarshipPage = ({ id, onIdChanged }: WithNavigationById & any) => {
  return (
    <Row
      left={<StarshipList onItemSelected={onIdChanged} />}
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withNavigationById(StarshipPage, 'starships');
