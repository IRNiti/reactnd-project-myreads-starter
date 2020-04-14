import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ShelfList from './ShelfList'

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
          <ShelfList shelves={shelves} books={this.state.books}/>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
          )} />
      </div>
    )
  }
}

export default BooksApp
