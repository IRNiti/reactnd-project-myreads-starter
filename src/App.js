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
  };

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ShelfList books={this.state.books}/>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
          )} />
      </div>
    )
  }
}

export default BooksApp
