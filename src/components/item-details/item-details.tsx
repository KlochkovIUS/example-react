import React from 'react';
import { useEffect, useState } from 'react';
import { GetItem, Item } from '../../service/models';
import './item-details.css';
import Spinner from '../spinner';

const ItemDetails = ({
  itemId,
  getData,
  getImageUrl,
  children
}: {
  itemId: string | undefined;
  getData: GetItem;
  getImageUrl: ({ id }: { id: any }) => string;
  children: any;
}) => {
  const [item, setItem] = useState<Item>();
  const [image, setImage] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (itemId) {
      setLoading(true);
      getData(itemId).then(newItem => {
        setItem(newItem);
        setImage(getImageUrl(newItem));
        setLoading(false);
      });
    }
  }, [getData, getImageUrl, itemId]);

  if (!item || !itemId) {
    return <span>Select a item from a list</span>;
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="item-details card">
      <img className="item-image" src={image} alt="item" />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
