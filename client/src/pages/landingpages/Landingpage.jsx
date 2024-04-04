import React from 'react'
import NavBar from '../../components/other/navbar/Navbar'
import Experiments from '../../components/other/Experiments/Experiments'
import "./Landingpage.css"
import Footer from '../../components/other/navbar/Footer'
const Landingpage = () => {
  return (
    <div>
    <NavBar/>
    <div className='align'>
      <body>
        
      </body>
      
        {/* <div>

            <Experiments/>
        </div> */}
        
        <div className='exp'>
                    <table className='exp_table1'>   
                    <div className='content'>
                        <a href='/Expt1'>
                        <h4>Experimnet 1: Creating a block</h4>
                        </a>
                    </div>
                    <div>
                        <p className='info'>Creating a block for given logic</p>
                    </div>
                    </table>
          </div>
          <div className='exp'>
                    <table className='exp_table2'>   
                    <div className='content'>
                        <a href='/Expt2'>
                        <h4>Experimnet 2: Block Validation</h4>
                        </a>
                    </div>
                    <div>
                        <p className='info'>Perform Exp1 before attempting</p>
                    </div>
                    </table>
                </div>
                <div className='exp'>
                    <table className='exp_table3'>   
                    <div className='content'>
                        <a href='/Expt3'>
                        <h4>Experimnet 3: BlockChain Emulator</h4>
                        </a>
                    </div>
                    <div>
                        <p className='info'>Verify the working of a virtual blockchain emulator</p>
                    </div>
                    </table>
                </div>
                <div className='exp'>
                    <table className='exp_table4'>   
                    <div className='content'>
                        <a href='/Expt4'>
                        <h4>Experimnet 4: Mining the block</h4>
                        </a>
                    </div>
                    <div>
                        <p className='info'>Anatony and Minig the block </p>
                    </div>
                    </table>
                </div>
          </div>
         
    </div>
    
  )
}

export default Landingpage;