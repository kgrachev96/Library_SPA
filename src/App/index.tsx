import * as React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../dist/style.scss';

import Home from '../pages/Home';
import Toolbar from '../components/Toolbar';
//import Content from '../components/Content';

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <Router>
                <div>
                    <Toolbar />
                    
                        {/* <Content /> */}
                            {/* <Route path = "/" component = {Home} /> */}
                            <Home />
                        {/* <Content /> */}
                </div>
            </Router>
        )
    }

}

render(<App />, document.getElementById('root'));