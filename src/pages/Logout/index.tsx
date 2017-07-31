import * as React from 'react';

class Logout extends React.Component<any, any> {
    componentWillMount() {
        this.props.onLogout();
    }

    render() {
        return null;
    }
}

export default Logout;