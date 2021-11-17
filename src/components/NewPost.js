import React from 'react'
import { useState } from 'react'


// NewPost component allows the user to submit a post using a form
const NewPost = ({ onNewPost }) => {

    // Hold state of the form input boxes
    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // On submit, validate fields, call onNewPost to submit, and clear the input fields
    const onSubmit = (e) =>{
        e.preventDefault()

        if(!username || !title || !content){
            alert("Please fill out post completly")
            return
        }
        onNewPost({username, title, content})
        setUsername("")
        setTitle("")
        setContent("")
    }

    return (
        <div className="post-container">
            <h1>New Post</h1>
            <form onSubmit={onSubmit}> 
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="form-control">
                    <label>Body</label>
                    <textarea type="text" placeholder="Enter Text" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <input type="submit" value="POST" className= "btn btn-block"></input>
            </form>
        </div>
    )
}

export default NewPost
