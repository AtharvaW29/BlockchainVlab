import React from 'react'
import PersistentDrawerLeft from '../../components/other/drawer/Drawer'
import ethereum2 from '../../assets/images/Expt2.jpg'

const pages = [{ id: 1, name: 'Aim', path: '/Expt2/Aim' },
              { id: 2, name: 'Theory', path: '/Expt2/Theory' },
              { id: 3, name: 'Procedure', path: '/Expt2/Procedure' },
              { id: 4, name: 'Experiment', path: '/Expt2/Experiment' },
              { id: 5, name: 'Feedback', path: '' }];

const ExptTwo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-white">
      <PersistentDrawerLeft pages={pages} />
    <h1 className="text-5xl font-bold mb-8 text-center">Welcome to Experiment2 !</h1>
    <div className="max-w-lg p-6 rounded-lg bg-blue-900 bg-opacity-10 backdrop-blur-lg text-center text-blue-900">
        <h2 className="text-3xl font-bold mb-4">Validation of a Block</h2>
        <p className="text-lg mb-6">Use the transaction noted in Experiment 1 while creation of a block to view and get the status of any block</p>
        <div className="mt-6">
            <img src={ethereum2} alt="Blockchain Image" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="mt-8">
            <a href="/Expt2/Theory" className="py-2 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition duration-300">Start Experiment</a>
        </div>
    </div>
    <p className="mt-8 text-sm text-center">Powered by Your Imagination</p>
</div>
  )
}

export default ExptTwo