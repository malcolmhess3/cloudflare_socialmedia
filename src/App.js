import { useState, useEffect } from 'react';
import About from './components/About';
import Button from './components/Button';
import Header from './components/Header';
import NewPost from './components/NewPost';

// Import lodash
const _ = require("lodash")

// Main app function
function App() {

  //State for displaying new post container and about conatiner
  //State for list of posts
  const [showNewPost, setShowNewPost] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [posts, setPosts] = useState([])

  //Use effect to load posts into the page on start up
  useEffect(() => {
    const getPost = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer.reverse())
    }
    getPost()
  }, [])

  // Function to update the post list from the backend
  const UpdatePosts = async () => {
    const data = await fetchPosts()
    setPosts(data.reverse())
  }

  // Function to fetch the post from the back end and return a list of data
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://heworld.malcolmhess3.workers.dev/", { method: "GET" })
      const data = await res.json()
      console.log(res)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  // Function to send POST request to back end to create new post
  const createNewPost = async (post) => {
    try {
      const res = await fetch("https://heworld.malcolmhess3.workers.dev/", { method: "POST", headers: { 'content-type': 'application/json' }, body: JSON.stringify(post) })
      if (res.ok){
        setPosts([post, ...posts])
        console.log(res)
      }
    } catch (e) {
      console.log(e)
    }
    UpdatePosts()
  }

  // Function to send POST request to like a post, prevents the user from liking a post twice
  const onClickToLike = async (post) => {
    if(!post.alreadyLiked){
      try {
        const res = await fetch("https://heworld.malcolmhess3.workers.dev/", { method: "POST", headers: { 'content-type': 'application/json' }, body: JSON.stringify({...post, 'like': true})})
        console.log(res)
      } catch (e) {
        console.log(e)
      }
      setPosts(
        posts.map((iPost) => (_.isEqual(iPost, post)) ? {...iPost, likes: iPost.likes+1, alreadyLiked: true} : iPost)
      )
    }
  }

  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>CloudBook</h1>
      <Button color={showNewPost ? "orange" : "black"} text={showNewPost ? "close" : "New Post"} onClick={() => {setShowNewPost(!showNewPost)}} />
      <Button color={showAbout ? "orange" : "black"} text={showAbout ? "close" : "About"} onClick={() =>{setShowAbout(!showAbout)}} />
      {showAbout && <About/>}
      {showNewPost && <NewPost onNewPost={createNewPost} />}
      <Header posts={posts} onClickToLike={onClickToLike}/>
    </div>
  );
}

export default App;
