import React from 'react'
import PersistentDrawerLeft from '../../components/other/drawer/Drawer'

const pages = [{ id: 1, name: 'Validation', path: '/Validation' }]

const ExptTwo = () => {
  return (
    <div>
        <PersistentDrawerLeft pages={pages}/>
        <h1>Validation of Block</h1>
        <div style={{marginTop: 50}}>
          <h3>Use the transaction noted in Experiment 1, <br/> 
              while creation of a block to view and get the <br/>
              status of any block</h3>
        </div>
    </div>
  )
}

export default ExptTwo
