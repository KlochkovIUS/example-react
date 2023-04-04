import { GetAllItems, Items } from '../../service/models';
import React, { useEffect, useState } from 'react';
import './item-list.css';
import Spinner from '../spinner';

const ItemList = ({
  getData,
  onItemSelected
}: {
  getData: GetAllItems;
  onItemSelected: (id: string) => void;
}) => {
  const [data, setData] = useState<Items>();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getData().then(newData => {
      setData(newData);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner />;
  if (!data) return null;

  const renderedItems = data.map(item => {
    const { id, name } = item;

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        <span>{name}</span>
      </li>
    );
  });

  return <ul className="item-list list-group">{renderedItems}</ul>;
};

export default ItemList;
