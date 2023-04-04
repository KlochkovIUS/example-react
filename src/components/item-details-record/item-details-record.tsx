import React from 'react';
import { Item } from '../../service/models';
import './item-details-record.css';

const ItemDetailsRecord = ({ item, field, label }: { item?: Item; field: string; label: string }) => {
  if (!item) return null;
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default ItemDetailsRecord;
