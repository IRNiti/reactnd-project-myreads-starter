import React, {Component} from 'react';
import UpdateShelf from './UpdateShelf';

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
                <UpdateShelf />
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
			)
	}
}

export default Book;