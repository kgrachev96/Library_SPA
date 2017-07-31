import * as React from 'react';

import './style.scss';

export default class Card extends React.Component<any, any> {

    constructor(props: any){
        super(props);

    }

    render(){
    return (
        <div className = "card">
            <div className = "card-block">
                <img src={`/img/books/${this.props.book.cover}`} alt={this.props.book.title} />

                    <h2 className = "card__title card__title--large">{this.props.book.title}</h2>
                    <p className = "card__subtitle">{this.props.book.author}</p>
                    <p className = "card__subtitle">{this.props.book.publisher}, {this.props.book.year}</p>
                    <a href={`/books/${this.props.book.topic}/${this.props.book.slug}`}>Подробнее</a>
            </div>
        </div>
    );
    }
}
