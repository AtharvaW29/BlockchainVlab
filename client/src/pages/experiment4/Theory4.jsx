import React from 'react';
import { Typography, Divider } from '@mui/material';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [{ id: 1, name: 'Aim', path: '/Expt4' },
              { id: 2, name: 'Theory', path: '/Theory4' },
              { id: 3, name: 'Procedure', path: '/Procedure4' },
              { id: 4, name: 'Simulation', path: '/Simulate' },
              { id: 5, name: 'Feedback', path: '' }];

const Theory4 = () => {
  return (
    <div className="bg-white min-h-screen text-blue-900 flex flex-col justify-center items-center">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8">
        <Typography variant="h3" component="h1" paragraph>
          Understanding Mining in Blockchain 
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
        Mining is a fundamental process in blockchain technology where miners compete to validate transactions and add new blocks to the blockchain. Altering any value within a block requires miners to recalculate the block's hash and mine again to maintain the integrity and security of the blockchain.
        </Typography>
        <Divider />
        <div className='pt-10'>
        <Typography variant="h4" component="h2" paragraph>
          Steps to Mine a Block:
        </Typography>
        </div>
        <div className='flex justify-center'>
          <table className="border-blue-900 border-4" style={{height: 600}}>
            <tbody>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>1</Typography></td>
              <td> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Change a value or data within the block, such as a transaction amount or timestamp.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>2</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Utilize a cryptographic hash function, like SHA-256, to recalculate the hash of the modified block.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>3</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Compare the newly calculated hash with the target hash, which is determined by the network difficulty and typically requires meeting specific criteria, such as having a certain number of leading zeros.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>4</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>If the calculated hash meets the target criteria, the block is considered successfully mined and valid.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>5</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>If the hash does not meet the criteria, continue adjusting the block's data and recalculating the hash until a suitable hash is found.
              </Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>6</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Once a block is successfully mined, propagate it to other nodes in the network.
              </Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>7</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Other nodes validate the mined block based on its hash and content before adding it to their local copy of the blockchain.
              </Typography></td>
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

export default Theory4;
