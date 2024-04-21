import React from 'react';
import Typography from '@mui/material/Typography';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [{ id: 1, name: 'Aim', path: '/Expt4/Aim' },
              { id: 2, name: 'Theory', path: '/Expt4/Theory' },
              { id: 3, name: 'Procedure', path: '/Expt4/Procedure' },
              { id: 4, name: 'Experiment', path: '/Expt4/Experiment' },
              { id: 5, name: 'Feedback', path: '' }];

const Procedure4 = () => {
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
                  Adjust the value or data within the block.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>2</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Recalculate the block's hash using a cryptographic hash function.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>3</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Compare the calculated hash with the target hash, which typically requires the hash to meet certain criteria, such as having a specific number of leading zeros.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>4</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                If the calculated hash meets the criteria, the block is considered mined and valid.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>5</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                If not, continue adjusting the block's data and recalculating the hash until a suitable hash is found.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>6</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Once mined, propagate the mined block to other nodes in the network for validation and addition to the blockchain.
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

export default Procedure4;