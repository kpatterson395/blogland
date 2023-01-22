import React, { useState, useContext } from 'react';
import { BlogContext } from "./blog-context"
import { useNavigate } from "react-router-dom"
import "./BlogForm.scss"

const BlogForm = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [data, setData] = useState("")

    const { dispatch } = useContext(BlogContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD", title, author, data })
        setTitle("")
        setAuthor("")
        setData("")
        navigate("/blogland")
    }

    return (
        <div className='blog-form'>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="data">Data</label>
                <textarea
                    name="data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button className='submit-button'>Submit</button>
            </form>
        </div>

    );
}

export default BlogForm;