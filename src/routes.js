import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard_View from './Components/Dashboard_View/Dashboard_View';
import Wizard_View1 from './Components/Wizard_Views/Wizard_View1';
import Wizard_2 from './Components/Wizard_Views/Wizard_2';
import Wizard_3 from './Components/Wizard_Views/Wizard_3';
import Wizard_4 from './Components/Wizard_Views/Wizard_4';
import Wizard_5 from './Components/Wizard_Views/Wizard_5';
import Auth_View from './Components/Auth_View/Auth_View';



export default (

    <Switch>
        <Route component={Dashboard_View} exact path='/' />
        <Route component={Auth_View} path='/Login' />
        <Route component={Wizard_View1} path='/Wizard' />
        <Route component={Wizard_2} path='/Wizard2' />
        <Route component={Wizard_3} path='/Wizard3' />
        <Route component={Wizard_4} path='/Wizard4' />
        <Route component={Wizard_5} path='/Wizard5' />
    </Switch>
)