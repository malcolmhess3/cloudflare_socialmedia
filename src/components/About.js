import React from 'react'

// About component displays information about the application
function About() {
    return (
        <div className="post-container">
            <h1>About</h1>
            <p>Click new post to make a new post.</p>
            <p>Click on a post to give it a like.</p>
            <p>You are only allowed to like a post once (reload the page to cheat the system)</p>
            <p>If your post does not appear right away, wait 5 seconds and reload the page.</p>
            <p>Thanks for checking out my app!</p>
        </div>
    )
}

export default About
