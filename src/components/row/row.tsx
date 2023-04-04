import React, { ReactNode } from 'react';

import './row.css';

const Row = ({ left, right }: { left: ReactNode; right: ReactNode }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;
