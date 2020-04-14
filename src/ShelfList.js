import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';

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

class ShelfList extends Component {

	filterBooks = (shelf) => {
    	return this.props.books.filter((book) => (book.shelf === shelf.api))
  	};

	render(){
		return(
			<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
            	<div className="list-books-content">
              		{shelves.map((shelf) => 
                		(<Shelf key={shelf.api} shelf={shelf} books={this.filterBooks(shelf)} updateShelf={this.props.updateShelf}/>)
              		)}
            	</div>
            	<Link className='open-search' to='/search'>Search books</Link>
          	</div>
		)
	}
}

export default ShelfList;