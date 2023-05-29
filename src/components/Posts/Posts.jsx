import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import axios from 'axios';


const getPosts = () => {
    return axios.get('http://localhost:3000/posts')
}

const createPost = (newPost) => {
    return axios.post(" http://localhost:3000/posts", newPost)
}

const editPost = (url, published) => {
    return axios.patch(url, published)
}

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState('')
    const [showAll, setShowAll] = useState(false)

    // getPosts()
    // .then(res => setPosts(res.data))

    // console.log('render')

    // console.log(posts)
    useEffect(() => {
        // console.log('effect')
        getPosts()
            .then(res => {
                // console.log('Посты получены')
                setPosts(res.data)
            })
    }, [])

    // console.log(posts)

    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            title: newPost,
            published: Math.random() > 0.5
        }
        createPost(postObject)
            .then(res => setPosts(posts.concat(res.data)))
        // setPosts(posts.concat(res.data))
        setNewPost('')
    }

    const togglePublished = (id, published) => {
        // console.log('Пост который должен быть изменен ' + id)
        const url = ` http://localhost:3000/posts/${id}`
        // console.log(url, published)
        const editedInfo = {
            "published": !published
        }
        console.log(posts)
        editPost(url, editedInfo)
            .then(res => {
                setPosts(posts.map(post => post.id === id ? res.data : post))
            })
        // console.log(id) 
    }

    const deletePost = () => {
        console.log('Удалить')
    } 

    const postsToShow = showAll
        ? posts
        : posts.filter(post => post.published)
    //    console.log(postsToShow)



    // const handlePostChange = (event) => {
    //     console.log(event.target.value)
    //     setNewPost(event.target.value)
    // }
    return (

        <div>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    показать {showAll ? 'Опубликованные' : 'Все'}
                </button>
            </div>
            {postsToShow.map(post => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                        togglePublished={togglePublished}
                        deletePost={deletePost}
                    />
                )
            })}
            <form onSubmit={addPost}>
                <input
                    type={'text'}
                    value={newPost}
                    onChange={event => setNewPost(event.target.value)}
                />
                <input type="submit" value={"Создать пост"} />
            </form>
        </div>
    )
    //    console.log(postsList)
    // return (
    //     <div>
    //         {/* <div>
    //         <p>{props.posts[0].title}</p>
    //         <p>{props.posts[1].title}</p>
    //         <p>{props.posts[2].title}</p>
    //         </div> */}
    //         {postsList}
    //     </div>
    // );
};

export default Posts;