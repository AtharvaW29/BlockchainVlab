import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddCertificate from './components/certificate/add/AddCertificate';
import ViewCertificate from './components/certificate/view/ViewCertificate';
import GetTransactionDetails from './components/certificate/transaction/GetTransactionDetails';
import Page404 from './components/other/error/page-not-found/Page404';
import HowItWorks from './components/certificate/how it works/HowItWorks';
import LandingPage from './pages/landingpages/Landingpage';
import Assignment from './pages/experiment1/Assignment';
import ExptOne from './pages/experiment1/ExptOne';
import Procedure from './pages/experiment1/Procedure';
import Theory from './pages/experiment1/Theory';
import ExptTwo from './pages/experiment2/ExptTwo';
import ExptThree from './pages/experiment3/ExptThree';
import Homepage from './pages/Homepage/Homepage'
import Theory2 from './pages/experiment2/Theory2';
import Procedure2 from './pages/experiment2/Procedure2';
import Simulate from './pages/experiment4/Simulate';
import ExptFour from './pages/experiment4/ExptFour';
import Theory4 from './pages/experiment4/Theory4';
import Procedure4 from './pages/experiment4/Procedure4';

class Routes extends Component {
  render () {
    return (
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/Experiments" component={ LandingPage } />
          <Route path="/Simulation" component={ AddCertificate } />
          <Route path="/Observation" component={ ViewCertificate } />
          <Route path="/Validation" component={ GetTransactionDetails } />
          <Route path="/AboutUs" component={ HowItWorks } />
          <Route path="/Expt1" component={ ExptOne } />
          <Route path="/Assignment" component={ Assignment } />
          <Route path="/Procedure" component={ Procedure } />
          <Route path="/Theory" component={Theory} />
          <Route path="/Expt2" component={ ExptTwo } />
          <Route path="/Theory2" component={Theory2} />
          <Route path="/Procedure2" component={Procedure2} />
          <Route path="/Expt3" component={ ExptThree } />
          <Route path="/Expt4" component={ ExptFour }/>
          <Route path="/Theory4" component={Theory4} />
          <Route path="/Procedure4" component={Procedure4} />
          <Route path="/Simulate" component={ Simulate } />
          <Route component={ Page404 } />
        </Switch>
    );
  };
};

export default  Routes;
