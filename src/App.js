import React from 'react'
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchBooks from './SearchBooks'

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

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((response) => {
      this.setState(() => ({
        books : response
      }))
    })
  };

  filterBooks = (shelf) => {
    return this.state.books.filter((book) => (book.shelf === shelf.api))
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelves.map((shelf) => 
                (<Shelf key={shelf.api} shelf={shelf} books={this.filterBooks(shelf)}/>)
              )}
            </div>
            <Link className='open-search' to='/search'>Search books</Link>
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
          )} />
      </div>
    )
  }
}

export default BooksApp
