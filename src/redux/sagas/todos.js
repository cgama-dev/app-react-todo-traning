import { put } from 'redux-saga/effects'

import actionsCreators from './../actions'

export function* addTodoSaga(action) {

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 1000)
        })
    }

    //Resultado da promisse
    const result = yield promise()
    
    //Adicionan o resultado da promisse
    if (result) {
        yield put(actionsCreators.addTodoSuccess(action.text))
    }

}