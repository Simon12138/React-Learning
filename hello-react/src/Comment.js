import React, { Component } from 'react'

class Comment extends Component {
  constructor() {
    super();
    this.state = {timeString: ''}
  }

  componentWillMount() {
    this.__updateTimeString();
    this._timer = setInterval(
      this.__updateTimeString.bind(this),
      5000
    )
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  handleDeleteComment() {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }

  __updateTimeString() {
    var comment = this.props.comment;
    var duration = (+Date.now() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
          Delete
        </span>
      </div>
    )
  }
}

export default Comment