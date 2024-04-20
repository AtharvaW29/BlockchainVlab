import React from 'react';
import { Typography, Divider } from '@mui/material';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';

const pages = [
  { id: 1, name: 'Aim', path: '/Expt1' },
  { id: 2, name: 'Theory', path: '/Theory' },
  { id: 3, name: 'Procedure', path: '/Procedure' },
  { id: 4, name: 'Simulation', path: '/Simulation' },
  { id: 5, name: 'Observation', path: '/Observation' }
];

const Theory = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-blue-900 min-h-screen text-white">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8">
        <Typography variant="h4" component="h1" paragraph>
          Understanding Blockchain Theory
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
          A block is a unit of data that is stored on a blockchain. Blocks contain a timestamp, a transaction, and a hash. The hash is a unique identifier for the block, and it is used to verify the integrity of the block.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
          To create a block, you will need to use a blockchain client. A blockchain client is a software tool that allows you to interact with the blockchain. Once you have created a block, you can add it to the blockchain by linking it to the previous block.
        </Typography>
        <Divider />
        <Typography variant="h5" component="h2" paragraph>
          Steps to Create a Block:
        </Typography>
        <Typography variant="body1" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>
          <li>The block is created with a timestamp, a transaction, and a hash.</li>
          <li>The hash is calculated using a cryptographic hash function.</li>
          <li>The block is linked to the previous block by including the hash of the previous block in the block header.</li>
          <li>The block is added to the blockchain by broadcasting it to the network.</li>
          <li>Other nodes on the network verify the block and add it to their own copies of the blockchain.</li>
        </Typography>
      </div>
    </div>
  );
};

export default Theory;
