import React, { useEffect, useState } from 'react';
import { SHA256 } from 'crypto-js';
import { Typography, TextField, Grid, CardContent, Card, Button } from '@mui/material'

const ExptThree = () => {

  const [backgroundColor, setBackgroundColor] = useState('lightseagreen');

  const [blocks, setBlocks] = useState([
    { id: 1, blockNo: 1, nonce: 0, data: "some transaction data", prevHash: "0xea8834de1efb07f2bce756291b3e108123ba96456aec14283f072c4fcfd1324d", currentHash: "", color: backgroundColor },
    { id: 2, blockNo: 2, nonce: 0, data: "some transaction data", prevHash: "", currentHash: "", color: backgroundColor },
    { id: 3, blockNo: 3, nonce: 0, data: "some transaction data", prevHash: "", currentHash: "", color: backgroundColor },
    { id: 4, blockNo: 4, nonce: 0, data: "some transaction data", prevHash: "", currentHash: "", color: backgroundColor },
    { id: 5, blockNo: 5, nonce: 0, data: "some transaction data", prevHash: "", currentHash: "", color: backgroundColor }
  ]);

  useEffect(() => {
    const markBlocksForMining = (blockIndex) => {
      const updatedBlocks = [...blocks];
      for (let i = blockIndex; i< updatedBlocks.length; i++) {
        updatedBlocks[i].needMining = true;
      }
      setBlocks(updatedBlocks);
    };

    for (let i = 0; i < blocks.length; i++) {
      if(blocks[i].needMining){
        continue;
      }
      const block = blocks[i];
      if(block.nonce !== 0 || block.data !== "some transaction data" || block.prevHash !== "0xea8834de1efb07f2bce756291b3e108123ba96456aec14283f072c4fcfd1324d") {
        markBlocksForMining(i);
        break;
      }
    }
  }, [blocks]);

  const mineBlock = (blockIndex) => {
    const difficultyMajor = 4;
    const difficultyMinor = 15;
    const maximumNonce = 8;

    let hash = '';
    let nonceAttempt = 0;
    const block = blocks[blockIndex];

    const calculateHash = (nonce) => {
      const hashInput = block.blockNo + nonce + block.data + block.prevHash;
      return SHA256(hashInput).toString();
    };

    const pattern = '0'.repeat(difficultyMajor) + difficultyMinor.toString(16);
    const patternLen = pattern.length;

    while (nonceAttempt <= maximumNonce) {
      hash = calculateHash(nonceAttempt);
      if (hash.substring(0, difficultyMajor) === '0'.repeat(difficultyMajor)) {
        break;
      }
      nonceAttempt++;
    }

    const updatedBlocks = [...blocks];
    updatedBlocks[blockIndex] = { ...block, nonce: nonceAttempt, currentHash: hash };
    setBlocks(updatedBlocks);
  };

  const mineAllBlocks = () => {
    for (let i = 0; i < blocks.length; i++) {
      mineBlock(i);
    }
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
              {/* <Block block={block} mineBlock={() => mineBlock(block.id - 1)} /> */}
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
                      placeholder={block.blockNo}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      title="Nonce"
                      variant="outlined"
                      fullWidth
                      type="number"
                      placeholder={block.nonce}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      title="Data"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      placeholder={block.data}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      title="Previous Hash"
                      variant="outlined"
                      fullWidth
                      placeholder={block.prevHash}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      title="Current Hash"
                      variant="outlined"
                      fullWidth
                      placeholder={block.currentHash}
                      disabled
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={mineBlock(block.id)}
                  style={{ marginTop: "50px" }}>
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
