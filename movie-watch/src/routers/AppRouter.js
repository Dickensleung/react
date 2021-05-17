import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {APP_FOLDER_NAME} from '../global/Variables';
import Home from '../components/Home';
import SingleMovie from '../components/SingleMovie';

export default function AppRouter(){
    return(
        <Router basename={APP_FOLDER_NAME}>
            <div className="wrapper">
                <Switch>
                    <Route path="/" exact><Home /></Route>
                    <Route path="/index.html" exact><Home /></Route>
                    <Route path="/movie" exact />
                    <Route path= "/movie/:movieId" exact component={SingleMovie}><SingleMovie /></Route>
                </Switch>
            </div>
        </Router>
    )
}