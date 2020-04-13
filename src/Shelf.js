import React, {Component} from 'react';

class Shelf extends Component {

	style = (thumbnail) => {
		return {
			width: 128,
			height: 193,
			backgroundImage: `url(${thumbnail})`
		}
	};

	render(){
		return(
			<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf.label}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map((book) => (	
	                      <li>
	                        <div className="book">
	                          <div className="book-top">
	                            <div className="book-cover" style={this.style(book.imageLinks.thumbnail)}></div>
	                            <div className="book-shelf-changer">
	                              <select>
	                                <option value="move" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                          </div>
	                          <div className="book-title">{book.title}</div>
	                          <div className="book-authors">{book.authors}</div>
	                        </div>
	                      </li>
                      ))}
                    </ol>
                  </div>
                </div>
            </div>
			)
	}
}

export default Shelf;