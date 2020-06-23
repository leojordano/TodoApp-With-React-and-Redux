import { createStore } from 'redux'

const INITIAL_STATE = [
    {id: 1, name: 'Fazer Pipoca', on: false},
    {id: 2, name: 'Almoço', on: false},
    {id: 3, name: 'Café da Tarde', on: false},
]



function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if(!action.text.name) {
                return state
            }
            const newArr = [...state, action.text]
            return state = newArr
        case 'SET_ON':
            const item = state.map(item => (item.id === Number(action.item) ? {...item, on: true} : item))
            const newFilter = [...item]
            return newFilter
        case 'TURN_OFF':
            const turnOff = state.map(item => item.id === Number(action.item) ? {...item, on: false} : item)
            return [...turnOff]
        default:
            console.log('debug')
            return [...state]
    }
}

const store = createStore(reducer)

export default store