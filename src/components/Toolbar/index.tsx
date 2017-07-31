import * as React from 'react';

export default class Toolbar extends React.Component<any, any> {
    
    constructor(props:any){
        super(props);

        this.state = {
            user: {}
        }
    }

    render(){
        return(
            
        <header>
            <div className = "container">
                <section>
                    <h1>Библиотека JavaScript разработчика</h1>
                </section>
                
                <section>
                    <nav className = "navStyle">
                        <ul>
                        <li><a href="/" className="tab">Главная</a></li>
                        <li><a href="/about" className="tab">О проекте</a></li>
                        <li><a href="/books" className="tab">Книги</a></li>
                        {this.state.user ?
                            <li><a href="/logout" className="tab">Выйти</a></li>
                            :
                            <li><a href="/login" className="tab">Войти</a></li>
                        }
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
        );
    }
}