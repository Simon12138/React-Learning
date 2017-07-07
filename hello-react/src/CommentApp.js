import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

	constructor() {
		super();
		this.state = {
			comments: []
		}
	}

	componentWillMount() {
		this.__loadComments();
	}

	__loadComments() {
		var comments = localStorage.getItem('comments');
		if(comments) {
			comments = JSON.parse(comments);
			this.setState( {comments} );
		}
	}

	__saveComments(comments) {
		localStorage.setItem('comments', comments);
	}

	handleSubmitComment(comment) {
		if(!comment) return;
		if(!comment.username) return alert('Please enter a user name');
		if(!comment.content) return alert('Please enter content');
		var comments = this.state.comments;
		comments.push(comment);
		this.setState({ comments });
		this.__saveComments(comments);
	}

	render() {
		return (
			<div className='wrapper' >
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments} /> 
			</div>
		)
	}
}

export default CommentApp