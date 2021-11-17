import React from 'react'
import heart from '../heart_icon.png'

// Post component to show the users post
const Post = ({ post, onClickToLike }) => {

    // Default date object when the post has not yet been updated
    const dateObj = post.date ? new Date(post.date) : new Date()
    const date = dateObj.toLocaleString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

    return (
        <div className={post.alreadyLiked ? "post liked" : "post"} onClick={() => onClickToLike(post)}>
            <h1>{post.title}</h1>
            <h2>{post.username}:</h2>
            <p>{post.content}</p>
            <p style={{ fontSize: '14px', display: "inline" }}>{date}</p>
            <img src={heart} alt="heart" />
            <p style={{ fontSize: 24, display: "inline" }}>{post.likes ? post.likes : 0}</p>
        </div>
    )
}


export default Post
