import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './blog-context';

const BlogDetail = () => {
    const { id } = useParams()
    const { blogs, dispatch } = useContext(BlogContext)
    const blog = blogs.find(x => x.id === id)

    const [isEditing, setIsEditing] = useState(false)
    const [editingData, setEditingData] = useState({ title: blog.title, author: blog.author, data: blog.data })


    const handleEditState = () => {
        setIsEditing(true)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch({ type: "EDIT", newTitle: editingData.title, newAuthor: editingData.author, newData: editingData.data, id })
        setIsEditing(false)
    }


    return (
        <div>
            {isEditing ? (
                <form className='Blog-edit'>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={editingData.title} name="title" onChange={(e) => setEditingData({ ...editingData, title: e.target.value })} />
                    <label htmlFor="author">Author</label>
                    <input type="text" value={editingData.author} name="author" onChange={(e) => setEditingData({ ...editingData, author: e.target.value })} />
                    <label htmlFor="data">Data</label>
                    <textarea type="text" value={editingData.data} name="data" onChange={(e) => setEditingData({ ...editingData, data: e.target.value })} />
                    <button onClick={handleEdit}>Submit Changes</button>
                </form>
            ) : (
                <div className='blog-item'>
                    <h1>{blog.title}</h1>
                    <h3>{blog.author}</h3>
                    <p>{blog.data}</p>
                    <button onClick={handleEditState}>Edit Blog</button>
                </div>
            )
            }
        </div>
    );
}

export default BlogDetail;