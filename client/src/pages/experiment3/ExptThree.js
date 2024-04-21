import BlockchainComponent from "../../components/Blockchain";
import PersistentDrawerLeft from "../../components/other/drawer/Drawer";
import Footer from "../../components/other/navbar/Footer";

const pages = [{ id: 1, name: 'Aim', path: '/Expt3/Aim' },
              { id: 2, name: 'Theory', path: '/Expt3/Theory' },
              { id: 3, name: 'Procedure', path: '/Expt3/Procedure' },
              { id: 4, name: 'Experiment', path: '/Expt3/Experiment' },
              { id: 5, name: 'Feedback', path: '' }];
const ExptThree = () => {
  return (
    <>
    <div className='min-h-screen'>
      <PersistentDrawerLeft pages={pages}/>
    <BlockchainComponent />
    <div className='w-full'>
      <Footer/>
    </div>
  </div>
  </>
  );
};

export default ExptThree;
