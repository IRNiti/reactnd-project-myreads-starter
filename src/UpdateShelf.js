import React, {Component} from 'react';

class UpdateShelf extends Component {

	handleChange = (event) => {
		this.props.updateShelf(event.target.value);
	}

	render(){
		return(
			<div className="book-shelf-changer">
				<form>
					<select value={this.props.currentShelf} onChange={this.handleChange}>
	                    <option value="move" disabled>Move to...</option>
	                    <option value="currentlyReading">Currently Reading</option>
	                    <option value="wantToRead">Want to Read</option>
	                    <option value="read">Read</option>
	                    <option value="none">None</option>
                  </select>
				</form>
			</div>
		)
	}
}

export default UpdateShelf;