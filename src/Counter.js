import React from 'react'

import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <h4>Total tarefas: {props.todos.length}</h4>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos.data
    }
}

export default connect(mapStateToProps, null)(Counter)