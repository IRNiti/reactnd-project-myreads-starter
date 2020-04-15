import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends Component {

	static propTypes = {
		updateShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired,
	}

	state = {
		query: '',
		displayedBooks: []
	}

	handleChange = (event) => {
		const queryInput = event.target.value;
		console.log(queryInput);
		this.setState({
			query: queryInput
		}) 

		if(queryInput === ''){
			this.setState({
				displayedBooks: []
			})
		}
	}

	bookMap = () => {
		let myBookMap = {};
		this.props.books.forEach(book => (myBookMap[book.id] = book.shelf));
		return myBookMap;
	}

	componentDidUpdate(prevProps, prevState){
		if(this.state.query !== '' && this.state.query !== prevState.query){
			BooksAPI.search(this.state.query)
			.then((response) => {
				if(response.error === undefined){
					let originalBookMap = this.bookMap();
					response.forEach((book) => {
						if(originalBookMap[book.id] !== undefined){
							book.shelf = originalBookMap[book.id];
						}
					})
					if(this.state.query !== ''){
						this.setState({
							displayedBooks: response
						})
					}
				}
			})
			.catch(err => {
				console.log(err);
			})
		}
	}

	render(){
		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link className="close-search" to='/'>Close</Link>
	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input 
	                	type="text" 
	                	placeholder="Search by title or author"
	                	value={this.state.query}
	                	onChange={this.handleChange}
	                />

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{this.state.displayedBooks.map((book) =>
	              	<li key={book.id}>
                    	<Book book={book} updateShelf={this.props.updateShelf}/>
                    </li>
                    )}
	              </ol>
	            </div>
            </div>
		)
	}
}

export default SearchBooks;