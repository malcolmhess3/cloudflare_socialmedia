import React from 'react'
import Post from './Post'

// Header function contains all of the users posts
const Header = ({posts, onClickToLike}) => {
    return (
        <div className="container">
            <h2>Today's User's Posts</h2>
            {posts.map((post) => (
                <Post key={post.username + ":" + post.title} post={post} onClickToLike={onClickToLike}/>
            ))}
        </div>
    )
}

export default Header
