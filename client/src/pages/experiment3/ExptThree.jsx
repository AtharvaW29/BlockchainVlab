import React, { useEffect, useState } from 'react';
import { Typography, TextField, Grid, CardContent, Card, Button } from '@mui/material'
import { Blockchain, Block } from './chain/blockchain';


const ExptThree = () => {
  const [blocks, setBlocks] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('lightseagreen');

  useEffect(() => {
    const initializeBlockchain = () => {
      let myBlockchain = new Blockchain();
      let blockchainBlocks = [];
      for (let i = 0; i < myBlockchain.chain.length; i++) {
        const block = myBlockchain.chain[i];
        blockchainBlocks.push({
          id: i + 1,
          blockNo: block.blockNo,
          nonce: block.nonce,
          data: block.data,
          prevHash: block.prevHash,
          currentHash: block.currentHash,
          color: backgroundColor
        });
      }
      setBlocks(blockchainBlocks);
    };
    initializeBlockchain();
  }, [backgroundColor]);

  const mineBlock = (blockIndex) => {
    let updatedBlocks = [...blocks];
    updatedBlocks[blockIndex].nonce++;
    updatedBlocks[blockIndex].currentHash = updatedBlocks[blockIndex].calculateHash();
    setBlocks(updatedBlocks);
  };

  const mineAllBlocks = () => {
    let updatedBlocks = [...blocks];
    for (let i = 0; i < updatedBlocks.length; i++) {
      mineBlock(i);
    }
    setBlocks(updatedBlocks);
  };

  return (
    <>
      <div style={{ marginTop: 20, backgroundColor: 'lightcyan' }}>
        <Typography fontSize={28} fontWeight={700} fontFamily={'Poppins'}>
          <h1>BLOCKCHAIN EMULATOR</h1>
        </Typography>
      </div>
      <div style={{ alignItems: "center", marginTop: 50 }}>
        <h2>Blockchain</h2>
        <Grid container alignItems='center' spacing={4}>
          {blocks.map((block) => (
            <Grid item key={block.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 445, backgroundColor: block.color}}>
                <CardContent>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        title="Block No."
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={block.blockNo}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        title="Nonce"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={block.nonce}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        title="Data"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={block.data}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        title="Previous Hash"
                        variant="outlined"
                        fullWidth
                        value={block.prevHash}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        title="Current Hash"
                        variant="outlined"
                        fullWidth
                        value={block.currentHash}
                        disabled
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => mineBlock(block.id - 1)}
                    style={{ marginTop: "50px" }}
                  >
                    Mine
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <button onClick={mineAllBlocks}>Mine All Blocks</button>
    </>
  );
};

export default ExptThree;
