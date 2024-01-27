import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core'
import Block from './block/Block';

const blocks = [{id: 1, blockNo: 1, nonce: 21845, data: "some transaction data", prevHash: "000000acefefcewfsqeqce4dz", currentHash: "000000acefefcewfsqeqce4dz"},
                {id: 2, blockNo: 2, nonce: 21845, data: "some transaction data", prevHash: "000000acefefcewfsqeqce4dz", currentHash: "000000acefefcewfsqeqce4dz"},
                {id: 3, blockNo: 3, nonce: 21845, data: "some transaction data", prevHash: "000000acefefcewfsqeqce4dz", currentHash: "000000acefefcewfsqeqce4dz"},
                {id: 4, blockNo: 4, nonce: 21845, data: "some transaction data", prevHash: "000000acefefcewfsqeqce4dz", currentHash: "000000acefefcewfsqeqce4dz"},
                {id: 5, blockNo: 5, nonce: 21845, data: "some transaction data", prevHash: "000000acefefcewfsqeqce4dz", currentHash: "000000acefefcewfsqeqce4dz"}
            ]

const ExptThree = () => {

  return (
    <>
    <div style={{marginTop: 20, backgroundColor:'lightcyan'}} >
      <Typography fontSize={28} fontWeight={700} fontFamily={'Poppins'}>
        <h1>BLOCKCHAIN EMULATOR</h1>
      </Typography> 
    </div>
    <div style={{alignItems: "center", marginTop: 50}}>
        <h2>Blockchain</h2>
          <Grid container alignItems='center' spacing={4}>
            {blocks.map((block)=>(
                <Grid item key={block.id } xs={12} sm={6} md={4} lg={3}>
                    <Block block={block}/>
                </Grid>
            ))}
          </Grid>
    </div>
    </>
  )
}

export default ExptThree
