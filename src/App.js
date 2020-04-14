import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ShelfList from './ShelfList'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((response) => {
      this.setState(() => ({
        books : response
      }))
    })
  }

  handleUpdateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((response) => {
      //there's probably a better way to do this than retrieving array element by index
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
        <Route exact path='/' render={() => (
          <ShelfList books={this.state.books} updateShelf={this.handleUpdateShelf}/>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
          )} />
      </div>
    )
  }
}

export default BooksApp
