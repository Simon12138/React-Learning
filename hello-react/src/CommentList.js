import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

	static defaultProps = {
		comments: []
	}

	handleDeleteComment (index) {
    	if (this.props.onDeleteComment) {
    		this.props.onDeleteComment(index)
    	}
    }

	render() {
		return (
			<div>
				{this.props.comments.map((comment, i) => <Comment index={i} onDeleteComment={this.handleDeleteComment.bind(this)} comment={comment} key={i} />)}
			</div>
		)
	}
}

export default CommentList