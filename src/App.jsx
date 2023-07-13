import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Form from './components/form';
import List from './components/list';

function App() {

  const [ newItem, setnewItem ] = useState("");
  const [ todo, setTodo ] = useState(() => {

    const localValue = localStorage.getItem('ToDo Tasks')
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect( () => {

    localStorage.setItem('ToDo Tasks', JSON.stringify(todo))

  }, [todo] )

  function addToDo(title) {
    setTodo(currentToDo => {
      return [ ...currentToDo , { id : crypto.randomUUID(), title : title, completed : false }]
    })
  }

  // whenever we need to access the current/latest value, we write the code for it in a function like above
  console.log(todo)

  function toggleValue(completed, id){

    setTodo(currentToDo => {
      return currentToDo.map(item => {
        if(item.id === id){
          return { ...item, completed}
        }

        return item
      })
    })
  }

  function deleteItem(id) {
    setTodo(currentToDo => {
      return currentToDo.filter(item => {
        if(item.id !== id){
          return item
        }
      })
    })
  }

  function editItem(id){
    todo.filter(item => {
      if(item.id === id){
        setnewItem(item.title)
        deleteItem(item.id)
      }
    })
  }
  
  return (
    <div className='body'>
      <Form propName = {addToDo} setnewItem = {setnewItem} newItem={newItem}/>
      <h2 className='heading'>To-Do List</h2>
      <List todo = {todo} deleteItem = {deleteItem} toggleValue = {toggleValue} editItem={editItem}/>
    </div>
  )
}

export default App
