import Row from '../components/row';
import React, { useState } from 'react';
import PersonList from '../components/person-list/person-list';
import PersonDetails from '../components/person-details';

const PersonPage = () => {
  const [id, setSelectedItemId] = useState<string>();
  const onItemSelected = (newSelectedItem: string) => {
    setSelectedItemId(newSelectedItem);
  };
  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default PersonPage;
