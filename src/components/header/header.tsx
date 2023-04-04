import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { SwapiServiceContext } from '../../context/swapi-service-context';
import SwapiService from '../../service/swapi-service';

const Header = ({ onServiceChange }: { onServiceChange: () => void }) => {
  const swapiService = useContext(SwapiServiceContext);
  const swapiServiceTitle =
    swapiService instanceof SwapiService
      ? 'Реальные данные'
      : 'Тестовые данные';

  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
      </ul>

      <button
        onClick={() => onServiceChange()}
        className="btn btn-primary btn-sm"
      >
        Change Service
      </button>
      <label className="ml-auto align-self-center">{swapiServiceTitle}</label>
    </div>
  );
};

export default Header;
