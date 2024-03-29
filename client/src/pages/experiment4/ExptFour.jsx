import React, { useState } from 'react'
import { Typography, TextField, Grid, CardContent, Card, Button } from '@mui/material'
import { SHA256 } from 'crypto-js';

const ExptFour = () => {

    const [backgroundColor, setBackgroundColor] = useState('lightseagreen');
    const [blockNo, setBlockNo] = useState(1);
    const [nonce, setNonce] = useState(0);
    const [data, setData] = useState('');
    const [prevHash, setPrevHash] = useState('0xea8834de1efb07f2bce756291b3e108123ba96456aec14283f072c4fcfd1324d');
    const mineBlock = () => {
        const difficulty = 4;
        let hash = '';
        let nonceAttempt = nonce;

        while (hash.substring(0, difficulty) !== '0'.repeat(difficulty)) {
            const hashInput = blockNo + nonceAttempt + data + prevHash;
            hash = SHA256(hashInput).toString();
            nonceAttempt++;
        }

        setNonce(nonceAttempt);
        setPrevHash(hash);
        setBackgroundColor('lightseagreen');
        };


    const onMineButtonClick = () => {
        if (setBlockNo !== blockNo || setNonce !== nonce || setData !== data) {
          mineBlock();
        }
        if (setBlockNo == blockNo || setNonce == nonce || setData == data) {
          console.log('No Change')
        }
    };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{marginTop: 20, backgroundColor:'lightcyan', alignContent:'center', width: 'relative'}} >
      <Typography fontSize={28} fontWeight={700} fontFamily={'Poppins'}>
        <h1>The Block and Its Components</h1>
      </Typography> 
    </div>

    <div style={{alignItems: "center", marginTop: 50}}>
        <h2>Mining the Block</h2>
    <Card sx={{ width: 700, backgroundColor: backgroundColor, alignItems: "center"}}>
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Block No."
              variant="outlined"
              fullWidth
              type="number"
              value={blockNo}
              onChange={(e)=>{setBlockNo(e.target.value); setBackgroundColor('red');}}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nonce"
              variant="outlined"
              fullWidth
              type="number"
              value={nonce}
              onChange={(e)=>{setNonce(e.target.value); setBackgroundColor('red');}}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Data"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={data}
              onChange={(e)=>{setData(e.target.value); setBackgroundColor('red');}}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Hash"
              variant="outlined"
              fullWidth
              value={prevHash}
              disabled
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={onMineButtonClick}
          style={{ marginTop: "50px" }}
        >
          Mine
        </Button>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default ExptFour
