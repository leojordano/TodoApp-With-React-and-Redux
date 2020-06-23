import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'

import {GrStatusGood} from 'react-icons/gr'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {RiCloseCircleLine} from 'react-icons/ri'

import store from './store/store'

function App() {
  const [users, setUsers] = useState(store.getState())
  const [text, setText] = useState(null)
  
  function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text,
    }
  }

  function setOn(item) {
    return {
      type: 'SET_ON',
      item
    }
  }

  function turnOff(item) {
    return {
      type: 'TURN_OFF',
      item
    }
  }

  function handleUsers() {
    return setUsers(store.getState())
  }

  function handleOn(e) {
    return store.dispatch(setOn(e.target.value))
  }
  function offOn(e) {
    return store.dispatch(turnOff(e.target.value))
  }

  const unsubscribe = store.subscribe(handleUsers)

  function handleDispatch() {
    setText('')
    return store.dispatch(addTodo({ id: users.length + 1, name: text, on: false }))
  }

    const render = users.map((item, index) => (
            <li key={item.id} className={item.on && 'on'}>
                {item.name}
                {item.on ?
                <button value={item.id} onClick={e => offOn(e)}>
                  C
                </button>
                :
                <button value={item.id} onClick={e => handleOn(e)}>
                  X
                </button>
                }
            </li>
            ))

  return (
    <Provider store={store}>
      <div className="container">
        <div className="header">
            Todo App With React and Redux
          </div>
        <div className='cont'>
          <ul>
            {render}
          </ul>
          <input type="text" onChange={e => setText(e.target.value)}/>
          <button onClick={() => handleDispatch() }>Add Todo</button>
        </div>
      </div>
    </Provider>
  );
}


export default App;
