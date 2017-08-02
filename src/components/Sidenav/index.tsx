import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default class Sidenav extends React.Component<any, any> {
    render(){
        return(
            <nav className="list">
                {this.props.topics.map((topic: any) => 
                    <NavLink
                        key={topic.id}
                        to={`/books/${topic.id}`}
                        className="list-item"
                        activeClassName = "nav--active">
                        <img src={`/img/topics/${topic.id}.png`} className = "list-img"/>
                        {topic.title}
                    </NavLink>
                )}
            </nav>
        );
    }
}