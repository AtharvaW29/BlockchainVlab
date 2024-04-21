import React from 'react';
import Typography from '@mui/material/Typography';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [{ id: 1, name: 'Aim', path: '/Expt3/Aim' },
              { id: 2, name: 'Theory', path: '/Expt3/Theory' },
              { id: 3, name: 'Procedure', path: '/Expt3/Procedure' },
              { id: 4, name: 'Experiment', path: '/Expt3/Experiment' },
              { id: 5, name: 'Feedback', path: '' }];

const ProcedureThree = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center min-h-screen">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8 pb-20">
        <Typography variant="h6" gutterBottom fontFamily='Poppins'>
          <b>Procedure:</b>
        </Typography>
        <div className="flex justify-center">
          <table className="w-full border-blue-900 border-4">
            <tbody>
            <tr className="border-blue-900 border-4">
                <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>Sr. No.</Typography></td>
                <td>
                  <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                  Task
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
                <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>1</Typography></td>
                <td>
                  <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                  Enter the required information in the form fields, such as the sender's address, receiver's address,
                   and the amount of cryptocurrency to be transferred.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>2</Typography></td>
                <td>
                <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                Click the "Submit" or "Send" button to initiate the transaction,
                 Ensure that the transaction request is processed and recorded in the system.
                  </Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>3</Typography></td>
                <td>
                <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                Click the "Mine" button to initiate the mining process for the submitted transaction.</Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>4</Typography></td>
                <td>
                <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                Observe the mining process as it progresses, which may involve computational work to solve a cryptographic puzzle.</Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>5</Typography></td>
                <td>
                <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                Once the block is successfully mined and added to the blockchain, students can interact with it,
                Explore the details of the mined block, such as its hash value, transaction data, timestamp, and previous block hash.</Typography>
                </td>
              </tr>
              <tr className="border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant='h6' component="ol" style={{ fontFamily: 'Poppins' }}>6</Typography></td>
                <td>
                <Typography variant="h6" component="ol" style={{ fontFamily: 'Poppins' }}>
                Check the sender's and receiver's addresses, as well as the transaction amount, to confirm the accuracy of the recorded transaction data.</Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full mt-24 pt-32'>
        <Footer/>
      </div>
    </div>
  );
};

export default ProcedureThree;