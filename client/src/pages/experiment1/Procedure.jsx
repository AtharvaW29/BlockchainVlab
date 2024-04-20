import React from 'react';
import Typography from '@mui/material/Typography';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [
  { id: 1, name: 'Aim', path: '/Expt1' },
  { id: 2, name: 'Theory', path: '/Theory' },
  { id: 3, name: 'Procedure', path: '/Procedure' },
  { id: 4, name: 'Simulation', path: '/Simulation' },
  { id: 5, name: 'Observation', path: '/Observation' },
{ id: 6, name: 'Feedback', path: '' }];

const Procedure = () => {
  return (
    <div className="bg-white min-h-screen text-black flex flex-col justify-center items-center">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8 pb-20">
        <Typography variant="h3" gutterBottom fontFamily='Poppins'>
          <b>Procedure:</b>
        </Typography>
        <div className="flex justify-center">
          <table className="w-full border-blue-900 border-4">
            <tbody>
            <tr className="border-blue-900 border-4">
                <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>Sr. No.</Typography></td>
                <td>
                  <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                  Task
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
                <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>1</Typography></td>
                <td>
                  <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                    Create a block with a timestamp, a transaction, and a hash.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>2</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Calculate the hash of the block using a cryptographic hash function.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>3</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Link the block to the previous block by including the hash of the previous block in the block header.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>4</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Broadcast the block to the network.
                </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>5</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Verify the block using a blockchain client.
                </Typography>                
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>6</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Add the block to your own copy of the blockchain.
                </Typography> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full mt-24 pt-24'>
        <Footer/>
      </div>
    </div>
  );
};

export default Procedure;