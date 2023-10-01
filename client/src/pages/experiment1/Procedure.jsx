import React from 'react'
import Typography from '@mui/material/Typography';

const Procedure = () => {
  return (
    <div>
       <Typography  style={{
            fontFamily: 'Poppins',
            fontSize: 28,
            fontWeight: 900,
        }}>
        Procedure:<br/>
        </Typography>
        
        <Typography  style={{
          fontFamily: 'Poppins',
          fontSize: 22,
          fontWeight: 600,
          textAlign:'left'
        }}>
          
            <li>Create a block with a timestamp, a transaction, and a hash.</li>
            <li>Calculate the hash of the block using a cryptographic hash function.</li>
            <li>Link the block to the previous block by including the hash of the previous block in the block header.</li>
            <li>Broadcast the block to the network.</li>
            <li>Verify the block using a blockchain client.</li>
            <li>Add the block to your own copy of the blockchain.</li>
          
        </Typography>
    </div>
  )
}

export default Procedure