import * as React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';

import topics from './data/topics';
import books from './data/books';

import App from './components/App';

render(<Router>
        <App topics = {topics} books = {books}/> 
    </Router>
, document.getElementById('root'));