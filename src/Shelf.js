import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function Shelf(props) {

	return(
		<div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{props.shelf.label}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books.map((book) => (	
                      <li key={book.id}>
                        <Book book={book} updateShelf={props.updateShelf}/>
                      </li>
                  ))}
                </ol>
              </div>
            </div>
        </div>
	)
}

Shelf.propTypes = {
	shelf: PropTypes.object.isRequired,
	books: PropTypes.array.isRequired,
	updateShelf: PropTypes.func.isRequired
}

export default Shelf;