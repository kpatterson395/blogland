import React, { useContext } from 'react'
import Blog from './Blogs'
import { BlogContext } from "./blog-context"

const BlogList = () => {
    const { blogs } = useContext(BlogContext)

    return (
        <div>
            {blogs.map((blog) => (
                <Blog title={blog.title} author={blog.author} data={blog.data} key={blog.id} id={blog.id} />
            ))}
        </div>


    );
}

export default BlogList;