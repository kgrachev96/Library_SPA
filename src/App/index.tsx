import * as React from 'react';
import {render} from 'react-dom';

class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <main>
                <h1>Привет!</h1>
            </main>
        )
    }

}

render(<App />, document.getElementById('root'));