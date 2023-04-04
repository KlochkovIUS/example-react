import React from 'react';
import Row from '../components/row';
import PlanetList from '../components/planet-list/planet-list';
import PlanetDetails from '../components/planet-details/planet-details';
import { useNavigate, useParams } from 'react-router-dom';

const PlanetPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onItemSelected = (newSelectedItem: string) => {
    navigate(`/planets/${newSelectedItem}`);
  };
  return <Row left={<PlanetList onItemSelected={onItemSelected} />} right={<PlanetDetails itemId={id} />} />;
};

export default PlanetPage;
