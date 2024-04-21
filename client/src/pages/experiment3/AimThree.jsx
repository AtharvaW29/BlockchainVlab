import React from "react";
import PersistentDrawerLeft from '../../components/other/drawer/Drawer';
import chain from '../../assets/images/Expt3.jpg'

const pages = [
  { id: 1, name: 'Aim', path: '/Expt3/Aim' },
  { id: 2, name: 'Theory', path: '/Expt3/Theory' },
  { id: 3, name: 'Procedure', path: '/Expt3/Procedure' },
  { id: 4, name: 'Experiment', path: '/Expt3/Experiment' },
  { id: 5, name: 'Feedback', path: '' }];

const AimThree = () => {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-white text-white">
      <PersistentDrawerLeft pages={pages} />
    <h1 className="text-5xl font-bold mb-8 text-center">Welcome to Experiment1 !</h1>
    <div className="max-w-lg p-6 rounded-lg bg-blue-900 bg-opacity-10 backdrop-blur-lg text-center text-blue-900">
        <h2 className="text-3xl font-bold mb-4">Create a Block with Smart Contracts</h2>
        <p className="text-lg mb-6">In this experiment you shall learn about the blockchain transaction via smart contract and understand creation of a block</p>
        <div className="mt-6">
            <img src={chain} alt="Blockchain Image" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="mt-8">
            <a href="/Expt3/Theory" className="py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition duration-300">Start Experiment</a>
        </div>
    </div>
    <p className="mt-8 text-sm text-center">Powered by Your Imagination</p>
</div>
        </>
    )
}

export default AimThree