import * as React from 'react';
import { Link } from 'react-router-dom';


function Card ( { book }: any ) {

    return (
        <div className = "card">
            <div className = "card-block">
                <img src={`/img/books/${book.cover}`} alt={book.title} />

                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.publisher}, {book.year}</p>
            </div>
        </div>
    );

}

export default Card;
