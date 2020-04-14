import React from 'react';
import UpdateShelf from './UpdateShelf';
import PropTypes from 'prop-types';

function Book(props) {

	const style = (thumbnail) => {
		return {
			width: 128,
			height: 193,
			backgroundImage: `url(${thumbnail})`
		}
	}

	const handleUpdateShelf = (shelf) => {
		props.updateShelf(props.book, shelf);
	}

	return(
		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={style(props.book.imageLinks.thumbnail)}></div>
            <UpdateShelf currentShelf={props.book.shelf} updateShelf={handleUpdateShelf}/>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
		)
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	updateShelf: PropTypes.func.isRequired
}

export default Book;