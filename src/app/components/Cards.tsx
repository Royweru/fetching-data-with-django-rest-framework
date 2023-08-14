import React from 'react'
import fetchAllPosts from '../../../lib/allposts'
const  Cards = async() => {
    const allposts:Promise<[]> = fetchAllPosts()
    const blogs:post[] = await allposts

  return (
   <div>
    {blogs.map(blog=>(
       <>
        <h1>
            {blog.title}
        </h1>
        
       </>
    ))}
   </div>
    
  )
}

export default Cards