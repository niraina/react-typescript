import React from 'react'
import { useNavigate } from "react-router-dom"
import { PostData } from '../interfaces'

interface PostsListsProps {
    allPosts: PostData[] | null
}

const PostsList: React.FC<PostsListsProps> = ({allPosts}) => {
    const navigate = useNavigate()

  return (
    <ul className='post'>
        { allPosts?.map(post => (
            <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>

            </li>
        ))}
    </ul>
  )
}

export default PostsList
