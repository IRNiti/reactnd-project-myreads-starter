import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

	static propTypes = {
		updateShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired,
	}

	state = {
		query: '',
		displayedBooks: []
	}

	// update query value and clear list of books to be displayed if query is empty
	handleChange = (event) => {
		const queryInput = event.target.value;
		this.setState({
			query: queryInput
		})

		if(queryInput === ''){
			this.setState({
				displayedBooks: []
			})
		}
	}

	// map between book id and shelf for shelved books
	// will be used to display current shelf for books that have one in search results
	bookMap = () => {
		let myBookMap = {};
		this.props.books.forEach(book => (myBookMap[book.id] = book.shelf));
		return myBookMap;
	}

	// when component updates due to a change in state query, retrieve results from server
	// the API is only called when the query has changed and when it is not empty
	// the state query is checked one last time before displayedBooks is updated in order to avoid race conditions
	componentDidUpdate(prevProps, prevState){
		if(this.state.query !== '' && this.state.query !== prevState.query){
			BooksAPI.search(this.state.query)
			.then((response) => {
				console.log(response);
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
				} else{
					this.setState({
						displayedBooks: []
					})
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
	              <Link className="close-search" to="/">Close</Link>
	              <div className="search-books-input-wrapper">
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