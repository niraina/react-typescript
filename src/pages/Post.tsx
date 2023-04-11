import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PostData } from '../interfaces';
import PostDetail from '../components/PostDetail';

type PostParams = {
    id: string;
}

const Post = () => {
    const {id} = useParams<PostParams>()
    const [onePost, setOnePost] = useState<PostData | null >(null)
console.log(onePost);

    useEffect(() => {
        const getPost = async () => {
            const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data: PostData = await post.json()
            setOnePost(data)
        }
        getPost()
    }, [])
  return (
    <div>
      <h1>Detail de la publication</h1>
      <PostDetail onePost={onePost}/>
    </div>
  )
}

export default Post
