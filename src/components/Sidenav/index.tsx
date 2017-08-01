import * as React from 'react';
import { NavLink } from 'react-router-dom';

import topics from './topics';
import './style.scss';

export default class Sidenav extends React.Component<any, any> {
    render(){
        return(
            <nav className="list">
                {topics.map(topic => 
                    <NavLink
                        key={topic.id}
                        to={`/books/${topic.id}`}
                        className="list-item">
                        <img src={`/img/topics/${topic.id}.svg`} className = "nav-im"/>
                        {topic.title}
                    </NavLink>
                )}
            </nav>
        );
    }
}