import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UpdateShelf extends Component {

	static propTypes = {
		currentShelf: PropTypes.string,
		updateShelf: PropTypes.func.isRequired
	}

	// update shelf with the value selected
	handleChange = (event) => {
		this.props.updateShelf(event.target.value);
	}

	// display none if no shelf is available in props (for books looked up in the search page)
	render(){
		return(
			<div className="book-shelf-changer">
				<select value={this.props.currentShelf === undefined ? "none" : this.props.currentShelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
              </select>
			</div>
		)
	}
}

export default UpdateShelf;