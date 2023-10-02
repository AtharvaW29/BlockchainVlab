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

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route path="/Simulation" component={ AddCertificate } />
          <Route path="/Observation" component={ ViewCertificate } />
          <Route path="/Validation" component={ GetTransactionDetails } />
          <Route path="/AboutUs" component={ HowItWorks } />
          <Route path="/Expt1" component={ ExptOne } />
          <Route path="/Assignment" component={ Assignment } />
          <Route path="/Procedure" component={ Procedure } />
          <Route path="/Theory" component={Theory} />
          <Route component={ Page404 } />
        </Switch>
      </BrowserRouter>
    );
  };
};

export default  Routes;
