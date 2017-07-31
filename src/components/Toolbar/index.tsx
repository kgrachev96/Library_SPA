import * as React from 'react';
import { HashRouter, Link } from 'react-router-dom';

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
                        <li><Link to = "/" className="tab">Главная</Link></li>
                        <li><Link to ="/about" className="tab">О проекте</Link></li>
                        <li><Link to ="/books" className="tab">Книги</Link></li>
                        {this.props.user ?
                            <li><Link to ="/logout" className="tab">Выйти</Link></li>
                            :
                            <li><Link to ="/login" className="tab">Войти</Link></li>
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