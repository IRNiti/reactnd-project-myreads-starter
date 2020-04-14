import React, {Component} from 'react';

class Book extends Component {

	style = (thumbnail) => {
		return {
			width: 128,
			height: 193,
			backgroundImage: `url(${thumbnail})`
		}
	};
	
	render(){
		return(
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={this.style(this.props.book.imageLinks.thumbnail)}></div>
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
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
			)
	}
}

export default Book;