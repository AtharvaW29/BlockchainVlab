import React from 'react';
import { Typography, Divider } from '@mui/material';

const Theory = () => {
  return (
    <div>
      <Typography paragraph style={{
                    fontFamily: 'Poppins',
                    fontSize: 24,
                    fontWeight: 600
      }}>
      A block is a unit of data that is stored on a blockchain.
      Blocks contain a timestamp, a transaction, and a hash.
      The hash is a unique identifier for the block, and it
      is used to verify the integrity of the block.
</Typography>
      <Typography paragraph style={{
                    fontFamily: 'Poppins',
                    fontSize: 24,
                    fontWeight: 600
      }}>
      To create a block, you will need to use a blockchain client.
      A blockchain client is a software tool that allows you to
      interact with the blockchain. Once you have created a block,
      you can add it to the blockchain by linking it to the previous block.</Typography>
      <Divider/>
      <Typography paragraph style={{
          fontFamily: 'Poppins',
          fontSize: 22,
          fontWeight: 600,
          textAlign:'left'
        }}>
          
            <li>The block is created with a timestamp, a transaction, and a hash.</li>
            <li>The hash is calculated using a cryptographic hash function.</li>
            <li>The block is linked to the previous block by including the hash of the previous block in the block header.</li>
            <li>The block is added to the blockchain by broadcasting it to the network.</li>
            <li>Other nodes on the network verify the block and add it to their own copies of the blockchain.</li>
          
        </Typography>      
    </div>
  )
}

export default Theory