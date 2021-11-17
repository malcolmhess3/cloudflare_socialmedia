# Social Media App

https://cloudflare-socialmedia.pages.dev/

Web based application coded in Javascript to imitate a social media website.

## Usage
Click on New Post to show the form where you can create a new post. 

Click on About to show information about the website.

Click on a post to increase the like counter. Each post can only be liked once per session.

## How it works
The front-end is built in react and hosted on Cloudflare pages. 
The back-end is built using python and ran on Cloudflare workers.
When a new post is created on the website and submited, a POST request containting the
information in a JSON string is sent to the Cloudflare worker. The worker then adds 
the post to the KV namespace to store it and React updates the list of posts to show
to the user.
