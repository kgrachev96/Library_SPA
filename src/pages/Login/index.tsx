import * as React from 'react';

import './style.scss';

class Login extends React.Component<any, any> {

    constructor(props: any){
        super(props);

        this.state = {
            usernameInput: '',
            passwordInput: null
        }
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        
        this.props.onLogin({
            username: this.state.usernameInput.value,
            password: this.state.passwordInput.value
        });
    };

    render() {
        return (
            <div id = "login">
                
                <form onSubmit={this.onSubmit}>
                    
                    <fieldset>
                    <h2>Авторизация</h2>
                    <p><label>Логин:</label></p>
                        <input
                            type="text"
                            name="username"
                            placeholder="Имя пользователя"
                            ref={input => this.state.usernameInput = input} />
            
                    <p><label>Пароль:</label></p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            ref={input => this.state.passwordInput = input} />
                
                    <p><button type="submit" className = "button">Войти</button></p>
                    </fieldset>

                </form>
            </div>
        );
    }
}

export default Login;