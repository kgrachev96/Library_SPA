import * as React from 'react';
import {render} from 'react-dom';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Books from '../../pages/Books';
import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import NotFound from '../../pages/NotFound';

import Toolbar from '../Toolbar';
import Content from '../Content';
import Sidenav from '../Sidenav';
import PrivateRoute from '../PrivateRoute';

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            user: null
        }
    }

    login = (user: any) => {
        this.setState( { user }, () => this.props.history.push('/books') );
    }

    logout = () => {
        this.setState( { user: null }, () => this.props.history.push('/') );
    }



    render() {
        return(
                <div>
                    <Toolbar user = {this.state.user}/>
                    <Content>
                        <Route path = "/books" render = {() => <Sidenav topics = {this.props.topics}/>} /> 
                        <Switch>
                            <Route exact path = "/" component = {Home} /> 
                            <Route path = "/about" component = {About} />
                            <Route path = "/login" render = {props => <Login onLogin = {this.login}/>} />
                            <Route path = "/logout" render = {props => <Logout onLogout = {this.logout}/>} />
                            <PrivateRoute exact path = "/books/:topic?" 
                                user = {this.state.user}
                                component = {Books} 
                                data = {this.props.books}
                            /> 
                            <Route component = {NotFound} /> 
                        </Switch>
                    </Content>
                </div>
        )
    }

}
export default withRouter(App);