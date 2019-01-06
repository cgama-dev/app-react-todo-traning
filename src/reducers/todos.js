
const initialState = {
    data: []
}

const todos = function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_TODO':
            state = {
                data: [...state.data, { id: Math.random(), text: action.text, status: false }]
            }

            return state

        case 'REMOVE_TODO':

            state = {
                data: state.data.filter((item) => item.id !== action.id)
            }

            return state

        case 'TOOGLE_TODO':
            state = {
                data: state.data.map((item) => {
                    if (item.id === action.id) {
                        item.status = item.status ? false : true
                    }
                    return item
                })
            }

            return state

        default:
            return state
    }
}

export default todos