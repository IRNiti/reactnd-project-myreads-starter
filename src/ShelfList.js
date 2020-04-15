import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

// map between shelf labels and values returned from server
const shelves = [{
  'label': 'Currently Reading',
  'api': 'currentlyReading'
},{
  'label': 'Want To Read',
  'api': 'wantToRead'
},{
  'label': 'Read',
  'api': 'read'
}]

function ShelfList(props){

	// only pass in the list of books relevant for the given shelf
	const filterBooks = (shelf) => {
    	return props.books.filter((book) => (book.shelf === shelf.api))
  	};

	return(
		<div className="list-books">
        	<div className="list-books-title">
          		<h1>MyReads</h1>
        	</div>
        	<div className="list-books-content">
          		{shelves.map((shelf) => 
            		(<Shelf key={shelf.api} shelf={shelf} books={filterBooks(shelf)} updateShelf={props.updateShelf}/>)
          		)}
        	</div>
        	<Link className="open-search" to="/search">Search books</Link>
      	</div>
	)
}

ShelfList.propTypes = {
	books: PropTypes.array.isRequired,
	updateShelf: PropTypes.func.isRequired
}

export default ShelfList;