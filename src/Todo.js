import React, { Component } from 'react'

import { connect } from 'react-redux'

import todoActions from './actions/todos'

import { Button } from 'semantic-ui-react'

class Todo extends Component {


    constructor(props) {
        super(props)

        this.state = {
            todo: ''
        }

    }

    handleChangeTodo = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    handleAddTodo = () => {

        this.props.addTodo(this.state.todo)

        this.setState({ todo: '' })

    }

    handleRemoveTodo = (id) => {
        this.props.removeTodo(id)
    }

    handleToogleTodo = (id) => {
        this.props.toogleTodo(id)
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.todo} onChange={this.handleChangeTodo} fluid placeholder='Escreva sua tarefa...' />
                    <Button type="button" onClick={() => this.handleAddTodo()}>Adicionar</Button>
                </form>
                <ul>
                    {
                        this.props.todos.map(item =>
                            <li key={item.id}> {item.status ? <s>{item.text}</s> : item.text}
                                <div>
                                    <button type="button" onClick={() => this.handleRemoveTodo(item.id)}>Remover</button>
                                    <button type="button" onClick={() => this.handleToogleTodo(item.id)}>Feita</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        todos: state.todos.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(todoActions.addTodo(text)),
        removeTodo: (id) => dispatch(todoActions.removeTodo(id)),
        toogleTodo: (id) => dispatch(todoActions.toogleTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)