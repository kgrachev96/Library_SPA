import * as React from 'react';
import {render} from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Books from '../pages/Books/index';
import Login from '../pages/Login/index';

import Toolbar from '../components/Toolbar';
import Content from '../components/Content';

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                    <Toolbar />
                    <Switch>
                        <Route exact path = "/" component = {Home} /> 
                        <Route path = "/about" component = {About} />
                        <Route path = "/books" component = {Books} /> 
                        <Route path = "/login" component = {Login} />
                        <Route component = {Content} />  
                    </Switch>
                </div>
            </Router>
        )
    }

}

render(<App />, document.getElementById('root'));