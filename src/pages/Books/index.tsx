import * as React from 'react';

import Card from '../../components/Card';

import './style.scss';

function Books( { match, books: data }: any ) {
    const books = match.params.topic ? data.filter((book: any) => book.topic === match.params.topic) : data;

    return (
        <div>
                    {books.map((book: any, index: any) =>
                        <div key={index} className = "block">
                            <Card book={book} />
                        </div>
                    )}
        </div>
    );
}

export default Books;