import React from 'react';
import Typography from '@mui/material/Typography';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [{ id: 1, name: 'Aim', path: '/Expt2' },
              { id: 2, name: 'Theory', path: '/Theory2' },
              { id: 3, name: 'Procedure', path: '/Procedure2' },
              { id: 4, name: 'Validation', path: '/Validation' },
              { id: 5, name: 'Feedback', path: '' }];

const Procedure2 = () => {
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
                  Obtain the hash of the previous block in the chain.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>2</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Calculate the hash of the new block.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>3</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                Compare the calculated hash of the new block with the stored hash of the previous block.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>4</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                If they match, the new block is considered valid and part of the chain.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h4' component="ol" style={{ fontFamily: 'Poppins' }}>5</Typography></td>
                <td>
                <Typography variant="h4" component="ol" style={{ fontFamily: 'Poppins' }}>
                If they don't match, the new block is considered invalid and not part of the chain.
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

export default Procedure2;