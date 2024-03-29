import React from "react";
import { Grid } from "@material-ui/core";
import Experiment from "./Experiment/Experiment";
import image1 from "../../../assets/images/Expt1.jpg";
import image2 from "../../../assets/images/Expt2.jpg";
import image3 from "../../../assets/images/Expt3.jpg";
import image4 from "../../../assets/images/Expt4.jpg";

const products =[
    {id:1, name: 'Experiment 1: Creating a Block', description: 'Create a block for given logic', image: image1,  path: '/Expt1'},
    {id:2, name: 'Experiment 2: Block Validation', description: 'Perform Expt1 before attempting', image: image2,  path: '/Expt2'},
    {id:3, name: 'Experiment 3: Blockchain Emulator', description: 'Verify the working of a virtual blockchain emulator', image: image3, path: '/Expt3'},
    {id:4, name: 'Experiment 4: Mining the block', description: 'Anatomy and Mining of Block', image: image4, path: '/Expt4'},
    // {id:5, name: 'Experiment 5: Peer to Peer Chain', description: 'Experiment description', image: image5, path: '/Expt5'}
]


const Experiments = () =>{
    return(
    <main style={{marginTop: "150px"}}>
        <Grid container alignItems="center" spacing={4} >
           {products.map((product)=>(
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Experiment product={product}/>
                </Grid> 
           ))}  
        </Grid>
    </main>
    );
}

export default Experiments;