import * as React from 'react';
import {render} from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import Books from '../pages/Books/index';
import Login from '../pages/Login/index';
import NotFound from '../pages/NotFound';

import topics from '../data/topics';
import books from '../data/books';

import Toolbar from '../components/Toolbar';
import Content from '../components/Content';
import Sidenav from '../components/Sidenav';

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                    <Toolbar />
                    <Content>
                        <Route path = "/books" render = {() => <Sidenav topics = {this.props.topics}/>} /> 
                        <Switch>
                            <Route exact path = "/" component = {Home} /> 
                            <Route path = "/about" component = {About} />
                            <Route exact path = "/books/:topic?" render = {props => <Books books = {this.props.books} {...props}/>} /> 
                            <Route path = "/login" component = {Login} />
                            <Route component = {NotFound} /> 
                        </Switch>
                    </Content>
                </div>
            </Router>
        )
    }

}

render(<App topics = {topics} books = {books}/>, document.getElementById('root'));