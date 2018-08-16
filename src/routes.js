import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard_View from './Components/Dashboard_View/Dashboard_View';
import Wizard_View1 from './Components/Wizard_Views/Wizard_View1';
import Wizard_2 from './Components/Wizard_Views/Wizard_2';


export default (

    <Switch>
        <Route component={Dashboard_View} exact path='/' />
        <Route component={Wizard_View1} path='/Wizard' />
        <Route component={Wizard_2} path='/Wizard2' />
    </Switch>
)