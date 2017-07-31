import * as React from 'react';

class Login extends React.Component<any, any> {

    constructor(props: any){
        super(props);

        this.state = {
            usernameInput: '',
            passwordInput: 0
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
            <main id="login">
                <form onSubmit={this.onSubmit}>
                    <div className="mdc-textfield">
                        <input
                            type="text"
                            name="username"
                            className="mdc-textfield__input"
                            placeholder="Имя пользователя"
                            ref={input => this.state.usernameInput = input} />
                    </div>
                    
                    <div className="mdc-textfield">
                        <input
                            type="password"
                            name="password"
                            className="mdc-textfield__input"
                            placeholder="Пароль"
                            ref={input => this.state.passwordInput = input} />
                    </div>

                    <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Войти</button>
                </form>
            </main>
        );
    }
}

export default Login;