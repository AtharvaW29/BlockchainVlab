import React from 'react';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';

const pages = [
  { id: 1, name: 'Aim', path: '/Expt1' },
  { id: 2, name: 'Theory', path: '/Theory' },
  { id: 3, name: 'Procedure', path: '/Procedure' },
  { id: 4, name: 'Simulation', path: '/Simulation' },
  { id: 5, name: 'Observation', path: '/Observation' }
];

const ExptOne = () => {
  return (
    <>
      <div>
        {/* Render a single instance of PersistentDrawerLeft */}
        <PersistentDrawerLeft pages={pages} />
      </div>
    </>
  );
};

export default ExptOne;
