import { takeLatest} from 'redux-saga/effects'

import { Types } from './../actions'

import {  addTodoSaga } from './todos'

export default function* rootSagas() {
    yield takeLatest(Types.ADD_TODO_REQUEST, addTodoSaga)
} 