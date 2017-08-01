import * as React from 'react';

import './style.scss';


interface ILProp{
    usernameInput: any
    passwordInput: any
    onLogin: any
}

class Login extends React.Component<ILProp, any> {

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
                    <div className = "textfield">
                        <input
                            type="text"
                            name="username"
                            placeholder="Имя пользователя"
                            ref={input => this.state.usernameInput = input} />
                    </div>
                    
                    <div className = "textfield">
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            ref={input => this.state.passwordInput = input} />
                    </div>

                    <button type="submit" className = "button">Войти</button>
                </form>
            </div>
        );
    }
}

export default Login;