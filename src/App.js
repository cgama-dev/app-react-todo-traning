import React, { Component } from 'react'

import { Provider } from 'react-redux'

import store from './store'

import Todo from './Todo'

import Counter from './Counter';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <section >
          <h3>Lista de tarefas</h3>
          <Todo />
          <Counter/>
        </section>
      </Provider>
    );
  }
}

export default App;
