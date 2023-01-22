import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './blog-context';


const Blog = ({ title, author, data, id }) => {
    const { dispatch } = useContext(BlogContext)

    return (
        <div className='blog-item'>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{`${data.slice(0, 10)}...`}</p>
            <Link to={`/blogs/${id}`}>Read More</Link>
            <span className="material-symbols-outlined" onClick={() => dispatch({ type: "DELETE", id })}>
                delete
            </span>
        </div>
    );
}

export default Blog;