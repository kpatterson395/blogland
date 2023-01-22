import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: action.title, author: action.author, data: action.data, id: uuidv4() }]
        case "DELETE":
            return state.filter(x => x.id !== action.id)
        default:
            return state
    }
}

export default reducer