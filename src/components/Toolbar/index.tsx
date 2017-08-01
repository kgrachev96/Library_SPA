import * as React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

import ToolbarLink from '../ToolbarLink';

import './style.scss';

export default class Toolbar extends React.Component<any, any> {
    
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            
        <header>
            <HashRouter>
            <div className = "container">
                <section>
                    <h1>Библиотека JavaScript разработчика</h1>
                </section>
                
                <section>
                    <nav className = "navStyle">
                        <ul>
                        <li><ToolbarLink exact to = "/" className="tab">Главная</ToolbarLink></li>
                        <li><ToolbarLink to ="/about" className="tab">О проекте</ToolbarLink></li>
                        <li><ToolbarLink to ="/books" className="tab">Книги</ToolbarLink></li>
                        {this.props.user ?
                            <li><ToolbarLink to ="/logout" className="tab">Выйти</ToolbarLink></li>
                            :
                            <li><ToolbarLink to ="/login" className="tab">Войти</ToolbarLink></li>
                        }
                        </ul>
                    </nav>
                </section>
            </div>
            </HashRouter>
        </header>
        );
    }
}