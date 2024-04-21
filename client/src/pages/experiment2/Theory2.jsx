import React from 'react';
import { Typography, Divider } from '@mui/material';
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import Footer from '../../components/other/navbar/Footer';

const pages = [{ id: 1, name: 'Aim', path: '/Expt2' },
              { id: 2, name: 'Theory', path: '/Theory2' },
              { id: 3, name: 'Procedure', path: '/Procedure2' },
              { id: 4, name: 'Validation', path: '/Validation' },
              { id: 5, name: 'Feedback', path: '' }];

const Theory2 = () => {
  return (
    <div className="bg-white min-h-screen text-blue-900 flex flex-col justify-center items-center">
      <PersistentDrawerLeft pages={pages} />
      <div className="p-8">
        <Typography variant="h3" component="h1" paragraph>
          Understanding Blockchain Network
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: 'Poppins', fontSize: 18 }}>
        Blockchain technology relies on the concept of blocks, which are linked together to form a chain. Each block contains a cryptographic hash of the previous block, creating a secure and tamper-resistant ledger. Validating a newly created block ensures the integrity and consistency of the blockchain.
        </Typography>
        <Divider />
        <div className='pt-10'>
        <Typography variant="h4" component="h2" paragraph>
          Steps to Validate a Block:
        </Typography>
        </div>
        <div className='flex justify-center'>
          <table className="border-blue-900 border-4" style={{height: 600}}>
            <tbody>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>1</Typography></td>
              <td> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Generate a new block containing transaction data, timestamp, and a reference to the previous block's hash.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"> <Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>2</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Calculate the hash of the new block using a cryptographic hash function such as SHA-256.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>3</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Access the blockchain to obtain the hash of the latest block (previous block) in the chain.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>4</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Compare the hash of the new block with the hash stored in the previous block.</Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>5</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>If the hashes match, proceed to step 4. Otherwise, the block is considered invalid.
              </Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>6</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>If the new block is validated, it is added to the blockchain as the latest block, forming a continuous chain.
              </Typography></td>
            </tr>
            <tr className="w-full border-blue-900 border-4">
              <td className="border-blue-900 border-4"><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>7</Typography></td>
              <td><Typography variant="h4" component="ul" style={{ fontFamily: 'Poppins', fontSize: 16 }}>Update the reference to this new block's hash in subsequent blocks, ensuring the integrity of the blockchain.
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

export default Theory2;
