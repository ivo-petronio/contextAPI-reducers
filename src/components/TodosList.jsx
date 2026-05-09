import Todo from './Todo.jsx';
import { useState } from 'react'

const initialTodos = [
  { id: 0, title: 'Banho do Fry', description: 'Banhar com shampoo Huggies e Cetoconazol', isDone: false },
  { id: 1, title: 'Banho da Bulma', description: 'Banhar com shampoo miconazol e clorexidina', isDone: false },
  { id: 2, title: 'Banho da Leela', description: 'Banhar com shapoo Huggies', isDone: false }
];

function TodosList() {

  const [tasks, setTasks] = useState(initialTodos)

  function eraseTask(id) {
    setTasks( oldstate => {
      return oldstate.filter( item => item.id !== id)
    })
  }

  function modifyTask(id) {
    setTasks( oldstate => {
      return oldstate.filter( item => {
        if (item.id === id ) {
          item.isDone = !item.isDone
        }
        console.log(item)
        return [
          ...oldstate, item
        ]
      })
    })
  }

  return (
    <>
      <div className="todos">
        {
          tasks.map( task =>
            <Todo
              key={task.id}
              task={task}
              deleteTask={ id => eraseTask(id) }
              completeTask={ id => modifyTask(id) }
            />
          )
        }
      </div>
    </>
  )
}

export default TodosList