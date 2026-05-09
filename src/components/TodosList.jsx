import Todo from './Todo.jsx';
import { useState } from 'react'

const initialTodos = [
  { id: 0, title: 'Banho do Fry', description: 'Banhar com shampoo Huggies e Cetoconazol', isDone: false },
  { id: 1, title: 'Banho da Bulma', description: 'Banhar com shampoo miconazol e clorexidina', isDone: false },
  { id: 2, title: 'Banho da Leela', description: 'Banhar com shapoo Huggies', isDone: false }
];

function TodosList() {

  const [tasks, setTasks] = useState(initialTodos)

  return (
    <>
      <div className="todos">
        {
          tasks.map( task =>
            <Todo
              title={task.title}
              description={task.description}
              isDone={task.isDone}
            />
          )
        }
      </div>
    </>
  )
}

export default TodosList