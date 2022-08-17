import React, { useState } from 'react'
import CreateArea from './components/CreateArea';
import ListArea from './components/ListArea';
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(newTask) {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };
    setTasks(prevTasks => {
      return [...prevTasks, item]
    })
  }

  function deleteTask(id) {
    setTasks(prevTasks => {
      return prevTasks.filter((taskItem) => {
        return taskItem.id !== id
      })
    })
  }

  function editTask() {
    setTasks(prevTasks => {
      return [...prevTasks]
    })
  }

  return (
    <div className='App'>
      <h1>Taskify</h1>
      <CreateArea onAdd={addTask} />
      {tasks.map((taskItem) => {
        return (
          <ListArea
            key={taskItem.id}
            id={taskItem.id}
            task={taskItem.value}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )
      })}
    </div>
  );
}

export default App;
