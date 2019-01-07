import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: [],
    isResquest: false
}
/*
* Criando os reducers 
*/
const addTodoRequest = (state = INITIAL_STATE, action) => {
    state = {
        ...state,
        isResquest: true
    }
    return state
}

const addTodoSuccess = (state = INITIAL_STATE, action) => {
    state = {
        data: [...state.data, { id: Math.random(), text: action.text, status: false }],
        isResquest: false
    }
    return state
}

const removeTodo = (state = INITIAL_STATE, action) => {
    state = {
        data: state.data.filter((item) => item.id !== action.id)
    }
    return state
}

const toogleTodo = (state = INITIAL_STATE, action) => {
    state = {
        data: state.data.map((item) => {
            if (item.id === action.id) {
                item.status = item.status ? false : true
            }
            return item
        })
    }
    return state
}

export default createReducer(INITIAL_STATE, {
    [Types.ADD_TODO_REQUEST]: addTodoRequest,
    [Types.ADD_TODO_SUCCESS]: addTodoSuccess,
    [Types.TOOGLE_TODO]: toogleTodo,
    [Types.REMOVE_TODO]: removeTodo
})