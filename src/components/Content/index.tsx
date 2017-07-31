import * as React from 'react';

import './style.scss';

export default class Content extends React.Component<any, any>{

    constructor(props: any){
        super(props);
    }
    render(){
    return (
        <div className="content">
            <main>
                {this.props.children}
            </main>
        </div>
    );
    }
}
