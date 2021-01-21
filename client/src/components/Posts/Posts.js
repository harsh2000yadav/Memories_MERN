import React from 'react'
import Post from './Post/Post'
import useStyles from './Styles'

const Posts = () => {
    const classes = useStyles();
    return (
        <div>
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts