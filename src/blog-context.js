import React, { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from "./useLocalStorage";
import reducer from "./reducer"

export const BlogContext = createContext()

const initialBlogs = [{
    title: "blog 1",
    author: "John Smith",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae quis veritatis deserunt ab animi totam quos, fugiat rem illum facilis repellat vitae esse nesciunt id maiores molestias magni eveniet?",
    id: uuidv4()
},
{
    title: "blog 2",
    author: "Jane Doe",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae quis veritatis deserunt ab animi totam quos, fugiat rem illum facilis repellat vitae esse nesciunt id maiores molestias magni eveniet?",
    id: uuidv4()
}]

export const BlogProvider = (props) => {
    // const [blogs, setBlogs] = useState(initialBlogs)
    const [blogs, dispatch] = useLocalStorage("blogs", initialBlogs, reducer)


    return (
        <BlogContext.Provider value={{ blogs, dispatch }}>
            {props.children}
        </BlogContext.Provider>
    )
}