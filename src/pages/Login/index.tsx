import * as React from 'react';


class Login extends React.Component<any, any> {

    constructor(props: any){
        super(props);
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        
        this.props.onLogin({
            username: this.props.usernameInput.value,
            password: this.props.passwordInput.value
        });
    };

    render() {
        return (
            <main id="login">
                <form onSubmit={this.onSubmit}>
                    <div className = "textfield">
                        <input
                            type="text"
                            name="username"
                            placeholder="Имя пользователя"
                            ref={input => this.props.usernameInput = input} />
                    </div>
                    
                    <div className = "textfield">
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            ref={input => this.props.passwordInput = input} />
                    </div>

                    <button type="submit" className = "button">Войти</button>
                </form>
            </main>
        );
    }
}

export default Login;