import { createReducer } from 'reduxsauce'
import { Types } from '../actions';

const INITIAL_STATE = {
    data: []
}
/*
* Criando os reducers 
*/
const addTodo = (state = INITIAL_STATE, action) => {
    state = {
        data: [...state.data, { id: Math.random(), text: action.text, status: false }]
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
    [Types.ADD_TODO]: addTodo,
    [Types.TOOGLE_TODO]: toogleTodo,
    [Types.REMOVE_TODO]: removeTodo
})