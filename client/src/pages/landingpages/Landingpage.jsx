import React from 'react'
import NavBar from '../../components/other/navbar/Navbar'
import Footer from '../../components/other/navbar/Footer'
import "./Landingpage.css"

const Landingpage = () => {
  return (
    <>
    <NavBar/>
    <div className='flex flex-col justify-between items-center min-h-screen'>  
  <div className='flex flex-col justify-center items-center'>
  <table className='exp_table1 border border-gray-300 rounded-lg p-4'>
    <div className='content'>
      <a href='/Expt1'>
        <h4 className='text-lg font-semibold text-blue-900'>Experiment 1: Creating a Block</h4>
      </a>
    </div>
    <div>
      <p className='text-sm text-gray-600'>Creating a block for given logic</p>
    </div>
  </table>
  <table className='exp_table2 border border-gray-300 rounded-lg p-4'>
    <div className='content'>
      <a href='/Expt2/Aim'>
        <h4 className='text-lg font-semibold text-blue-900'>Experiment 2: Block Validation</h4>
      </a>
    </div>
    <div>
      <p className='text-sm text-gray-600'>Perform Experiment 1 before attempting</p>
    </div>
  </table>
  <table className='exp_table3 border border-gray-300 rounded-lg p-4'>
    <div className='content'>
      <a href='/Expt3/Aim'>
        <h4 className='text-lg font-semibold text-blue-900'>Experiment 3: Blockchain Emulator</h4>
      </a>
    </div>
    <div>
      <p className='text-sm text-gray-600'>Verify the working of a virtual blockchain emulator</p>
    </div>
  </table>
  <table className='exp_table4 border border-gray-300 rounded-lg p-4'>
    <div className='content'>
      <a href='/Expt4/Aim'>
        <h4 className='text-lg font-semibold text-blue-900'>Experiment 4: Mining the Block</h4>
      </a>
    </div>
    <div>
      <p className='text-sm text-gray-600'>Anatomy and Mining the block</p>
    </div>
  </table>
</div>
<div className='w-full'>
<Footer/></div>
</div>
    </>
  )
}

export default Landingpage;