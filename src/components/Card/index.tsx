import * as React from 'react';

export default class Card extends React.Component<any, any> {

    constructor(props: any){
        super(props);

        this.state = {
            book: {}
        }
    }

    render(){
    return (
        <div className="mdc-card">
            <div className="mdc-card__horizontal-block">
                <img src={`/img/books/${this.state.book.cover}`} className="mdc-card__media-item mdc-card__media-item--2x" alt={this.state.book.title} />

                <section className="mdc-card__primary">
                    <h2 className="mdc-card__title mdc-card__title--large">{this.state.book.title}</h2>
                    <p className="mdc-card__subtitle">{this.state.book.author}</p>
                    <p className="mdc-card__subtitle">{this.state.book.publisher}, {this.state.book.year}</p>
                </section>
            </div>

            <section className="mdc-card__actions">
                <a href={`/books/${this.state.book.topic}/${this.state.book.slug}`} className="mdc-button mdc-card__action">Подробнее</a>
            </section>
        </div>
    );
    }
}
