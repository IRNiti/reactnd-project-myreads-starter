import React, {Component} from 'react';

class UpdateShelf extends Component {
	render(){
		return(
			<div className="book-shelf-changer">
				<form>
					<select>
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