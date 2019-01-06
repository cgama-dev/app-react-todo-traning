const addTodo = function (text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

const removeTodo = function (id) {
    return {
        type: 'REMOVE_TODO',
        id
    }
}

const toogleTodo = function (id) {
    return {
        type: 'TOOGLE_TODO',
        id
    }
}

export default {
    addTodo,
    removeTodo,
    toogleTodo
}