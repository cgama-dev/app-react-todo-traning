import { createActions } from 'reduxsauce'

/*
* Criando os actions types e creators (actions creators)
*/
export const { Types, Creators } = createActions({
    addTodo: ['text'],
    removeTodo: ['id'],
    toogleTodo: ['id']
})

export default Creators