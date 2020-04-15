import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ShelfList from './ShelfList'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  // retrieve all books from server when app is first instantiated
  componentDidMount() {
    BooksAPI.getAll()
    .then((response) => {
      this.setState(() => ({
        books : response
      }))
    })
  }

  // update book shelf in the database and then update app state with returned values
  handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      book.shelf = Object.keys(response).filter((shelf) => (response[shelf].includes(book.id)))[0];
      this.setState((prevState) => {
        return{
          books: [...prevState.books.filter((b) => (b.id !== book.id)), book]
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ShelfList books={this.state.books} updateShelf={this.handleUpdateShelf}/>
        )} />
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} updateShelf={this.handleUpdateShelf}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
