import * as React from 'react';

import books from './books';
import Card from '../../components/Card';

import './style.scss';

function Books() {
    return (
        <div>
                    {books.map((book, index) =>
                        <div key={index} className = "block">
                            <Card book={book} />
                        </div>
                    )}
        </div>
    );
}

export default Books;