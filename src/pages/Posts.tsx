import React, { useState, useEffect } from 'react'
import PostsList from '../components/PostsList'
import { PostData } from '../interfaces'
import './post.css'


const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[] | null >(null)
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5)

    const localOfStateNumber = () => localStorage.getItem('number') || numberOfPosts
    const localOrStateNum = localOfStateNumber()

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`)
            const data: PostData[] = await response.json()
            setAllPosts(data)
        }
        getPosts()
    }, [localOrStateNum])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(+e.target.value)
        localStorage.setItem('number', e.target.value)
    }
  return (
    <div>
      <h1>Page Principale</h1>
      <label htmlFor="posts">Nombre de publication {localOrStateNum}</label>
      <input type='range' min={1} max={20} onChange={handleChange} defaultValue={localOrStateNum}/>
      <PostsList allPosts={allPosts}/>
    </div>
  )
}

export default Posts
