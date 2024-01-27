import React, { useState } from 'react'
import { Typography, TextField, Grid, CardContent, Card, Button } from '@mui/material'
import { SHA256 } from 'crypto-js';

const ExptFour = () => {

    const [blockNo, setBlockNo] = useState(1);
    const [nonce, setNonce] = useState(0);
    const [data, setData] = useState('');
    const [prevHash, setPrevHash] = useState('0xea8834de1efb07f2bce756291b3e108123ba96456aec14283f072c4fcfd1324d');
    const mineBlock = () => {
        const baseHash = "0xea8834de1efb07f2bce756291b3e108123ba96456aec14283f072c4fcfd1324d";
        const difficulty = 4;

        let hash = '';

        do {
            const hashInput = blockNo + nonce + data + prevHash;
            hash = SHA256(hashInput).toString();
            setNonce(prevNonce => prevNonce + 1);
        }while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        setPrevHash(hash);
        };


    const onMineButtonClick = () => {
        mineBlock();
        console.log("Mined the block!")
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
    <Card sx={{ width: 700, backgroundColor: "lightseagreen", alignItems: "center"}}>
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
              onChange={(e)=>setBlockNo(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nonce"
              variant="outlined"
              fullWidth
              type="number"
              value={nonce}
              onChange={(e)=>setNonce(e.target.value)}
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
              onChange={(e)=>setData(e.target.value)}
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
