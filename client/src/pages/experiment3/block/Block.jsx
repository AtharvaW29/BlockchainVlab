import * as React from "react";
import { TextField, Button, Grid, Card, CardContent } from "@mui/material/";

const onMineButtonClick = () => {
    console.log("Mine!")
}

const Block = ({ block }) => {


  return (
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
          onClick={block.mineBlock}
          style={{ marginTop: "50px" }}
        >
          Mine
        </Button>
      </CardContent>
    </Card>
  );
};

export default Block;
