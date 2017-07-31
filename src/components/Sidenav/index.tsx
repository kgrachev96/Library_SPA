import * as React from 'react';

import topics from './topics';

export default class Sidenav extends React.Component<any, any> {
    render(){
        return(
        <aside className="mdc-permanent-drawer">
            <nav className="mdc-list mdc-list--avatar-list">
                {topics.map(topic => 
                    <a
                        key={topic.id}
                        href={`/books/${topic.id}`}
                        className="mdc-list-item">
                        <img src={`/img/topics/${topic.id}.svg`} className="mdc-list-item__start-detail"/>
                            {topic.title}
                    </a>
                )}
            </nav>
        </aside>
        );
    }
}