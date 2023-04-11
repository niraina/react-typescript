import React from 'react'
import { PostData } from '../interfaces'
import { Link } from 'react-router-dom'

interface PostDetailProps {
    onePost : PostData | null
}

const PostDetail: React.FC<PostDetailProps> = ({onePost}) => {
  return (
    <div>
      <h2>Publication numéro: {onePost?.id} :-) </h2>
      <h3>{onePost?.title}</h3>
      <p>{onePost?.body}</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  )
}

export default PostDetail
