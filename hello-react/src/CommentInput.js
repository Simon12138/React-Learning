import React, { Component } from 'react'

class CommentInput extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			content: ''
		}
	}

	componentWillMount() {
		this.__loadUsername();
	}

	componentDidMount() {
		this.textarea.focus()
	}

	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
	}

	handleContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}

	handleSubmit() {
		if(this.props.onSubmit) {
			this.props.onSubmit({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			});
		}
		this.setState({
			content: ''
		})
	}

	handleUsernameBlur(event) {
		this.__saveUsername(event.target.value);
	}

	__saveUsername (username) {
		localStorage.setItem('username', username);
	}

	__loadUsername() {
		var username = localStorage.getItem('username');
		if(username) {
			this.setState({ username });
		}
	}
	
	render() {
		return (
			<div className='comment-input'>
				<div className='comment-field'>
          			<span className='comment-field-name'>User Name：</span>
          			<div className='comment-field-input'>
            			<input value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)} />
          			</div>
        		</div>
        		<div className='comment-field'>
          			<span className='comment-field-name'>Content：</span>
          			<div className='comment-field-input'>
            			<textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
          			</div>
        		</div>
        		<div className='comment-field-button'>
          			<button onClick={this.handleSubmit.bind(this)}>Submit</button>
        		</div>
			</div>
		)
	}
}

export default CommentInput