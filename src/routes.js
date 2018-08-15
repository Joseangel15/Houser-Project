import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard_View from './Components/Dashboard_View/Dashboard_View';


export default (

    <Switch>
        <Route component={Dashboard_View} exact path='/' />
    </Switch>
)