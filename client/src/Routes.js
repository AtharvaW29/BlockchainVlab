import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddCertificate from './components/certificate/add/AddCertificate';
import ViewCertificate from './components/certificate/view/ViewCertificate';
import GetTransactionDetails from './components/certificate/transaction/GetTransactionDetails';
import Page404 from './components/other/error/page-not-found/Page404';
import HowItWorks from './components/certificate/how it works/HowItWorks';
import LandingPage from './pages/landingpages/Landingpage';
import ExptOne from './pages/experiment1/ExptOne';
import Procedure from './pages/experiment1/Procedure';
import Theory from './pages/experiment1/Theory';
import Homepage from './pages/Homepage/Homepage';
import ExptTwo from './pages/experiment2/ExptTwo';
import TheoryTwo from './pages/experiment2/TheoryTwo';
import ProcedureTwo from './pages/experiment2/ProcedureTwo';
import ExptThree from './pages/experiment3/ExptThree';
import TheoryThree from './pages/experiment3/TheoryThree';
import AimThree from './pages/experiment3/AimThree';
import ProcedureThree from './pages/experiment3/ProcedureThree';
import AimFour from './pages/experiment4/AimFour';
import TheoryFour from './pages/experiment4/TheoryFour';
import ProcedureFour from './pages/experiment4/ProcedureFour';
import ExptFour from './pages/experiment4/ExptFour';

class Routes extends Component {
  render () {
    return (
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/Experiments" component={ LandingPage } />
          <Route path="/Simulation" component={ AddCertificate } />
          <Route path="/Observation" component={ ViewCertificate } />
          <Route path="/AboutUs" component={ HowItWorks } />
          <Route path="/Expt1" component={ ExptOne } />
          <Route path="/Procedure" component={ Procedure } />
          <Route path="/Theory" component={Theory} />
          <Route path="/Expt2/Aim" component={ ExptTwo } />
          <Route path="/Expt2/Theory" component={ TheoryTwo } />
          <Route path="/Expt2/Procedure" component={ ProcedureTwo } />
          <Route path="/Expt2/Experiment" component={ GetTransactionDetails } />
          <Route path="/Expt3/Aim" component={ AimThree } />
          <Route path="/Expt3/Theory" component={ TheoryThree } />
          <Route path="/Expt3/Procedure" component={ ProcedureThree } />
          <Route path="/Expt3/Experiment" component={ ExptThree } />
          <Route path="/Expt4/Aim" component={ AimFour } />
          <Route path="/Expt4/Theory" component={ TheoryFour } />
          <Route path="/Expt4/Procedure" component={ ProcedureFour } />
          <Route path="/Expt4/Experiment" component={ ExptFour } />
          <Route component={ Page404 } />
        </Switch>
    );
  };
};

export default  Routes;
