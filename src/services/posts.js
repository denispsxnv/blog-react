import axios from 'axios'

const postsURL = "http://localhost:3001/posts"

const getPosts = () => {
    return axios.get(postsURL)
    // return fetch('http://localhost:3001/posts').then(res => res.json())
}

const createPost = (newPost) => {
    return axios.post(postsURL, newPost)
}

const editPost = (id, published) => {
    const url = `${postsURL}/${id}` //  http://localhost:3001/posts/3
    return axios.patch(url, published)
}

export default {
    get: getPosts,
    create: createPost,
    edit: editPost
}