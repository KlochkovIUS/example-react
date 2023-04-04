import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export type WithNavigationById = {
  id: string | undefined;
  onIdChanged: (newSelectedItem: string) => void;
};

export const withNavigationById = (
  WrappedComponent: (props: WithNavigationById) => JSX.Element,
  path: string
) => (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onIdChanged = (newSelectedItem: string) => {
    navigate(`/${path}/${newSelectedItem}`);
  };

  return <WrappedComponent {...props} id={id} onIdChanged={onIdChanged} />;
};
