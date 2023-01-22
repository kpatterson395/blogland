import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './blog-context';

const BlogDetail = () => {
    const { id } = useParams()
    const { blogs } = useContext(BlogContext)

    const blog = blogs.find(x => x.id === id)
    return (
        <div className='blog-item'>
            <h1>{blog.title}</h1>
            <h3>{blog.author}</h3>
            <p>{blog.data}</p>
        </div>
    );
}

export default BlogDetail;