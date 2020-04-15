import React from 'react'
import UpdateShelf from './UpdateShelf'
import PropTypes from 'prop-types'

function Book(props) {

	// manipulating the style tag to handle books without thumbnails
	const style = (imageLinks) => {
		if(imageLinks !== undefined){
			return {
				width: 128,
				height: 193,
				backgroundImage: `url(${imageLinks.thumbnail})`
			}
		} else {
			return {
				width: 128,
				height: 193
			}
		}
	}

	// pass in the current book to the updateShelf function
	const handleUpdateShelf = (shelf) => {
		props.updateShelf(props.book, shelf);
	}

	return(
		<div className="book">
          <div className="book-top">
            <div className="book-cover" style={style(props.book.imageLinks)}></div>
            <UpdateShelf currentShelf={props.book.shelf} updateShelf={handleUpdateShelf}/>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">
          	{props.book.authors === undefined ? '' : props.book.authors.map((author) =>
          		(<div key={author}>{author}<br/></div>)
          	)}
          </div>
        </div>
	)
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	updateShelf: PropTypes.func.isRequired
}

export default Book;