import React from 'react';
import { Typography, Divider } from '@mui/material';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [
  { id: 1, name: 'Aim', path: '/Expt1' },
  { id: 2, name: 'Theory', path: '/Theory' },
  { id: 3, name: 'Procedure', path: '/Procedure' },
  { id: 4, name: 'Simulation', path: '/Simulation' },
  { id: 5, name: 'Observation', path: '/Observation' },
{ id: 6, name: 'Feedback', path: '' }];

const Theory = () => {
  return (
    <div className="bg-white min-h-screen text-blue-900 flex flex-col justify-center items-center">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8">
        <Typography variant="h3" component="h1" paragraph>
          Understanding Blockchain Theory
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
          A block is a unit of data that is stored on a blockchain. Blocks contain a timestamp, a transaction, and a hash. The hash is a unique identifier for the block, and it is used to verify the integrity of the block.
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
          To create a block, you will need to use a blockchain client. A blockchain client is a software tool that allows you to interact with the blockchain. Once you have created a block, you can add it to the blockchain by linking it to the previous block.
        </Typography>
        <Divider />
        <div className='pt-10'>
        <Typography variant="h4" component="h2" paragraph>
          Steps to Create a Block:
        </Typography>
        </div>
        <div className='flex justify-center'>
          <table className="border-blue-900 border-4" style={{height: 600}}>
            <tbody>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>1</Typography></td>
              <td> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>The block is created with a timestamp, a transaction, and a hash.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>2</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>The hash is calculated using a cryptographic hash function.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>3</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>The block is linked to the previous block by including the hash of the previous block in the block header.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>4</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>The block is added to the blockchain by broadcasting it to the network.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>5</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Other nodes on the network verify the block and add it to their own copies of the blockchain.</Typography></td>
            </tr>
            </tbody>
          </table>
          </div>
      </div>
      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  );
};

export default Theory;
