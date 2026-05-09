import Todo from './Todo.jsx';
import { useState } from 'react'

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

function TodosList() {

  const [tasks, setTasks] = useState(initialTodos)

  return (
    <>
        <div className="todos">

            <Todo
              title="Do Groceries"
              description="Buy apples, rice, juice and toilet paper."
              isDone={true}
            />

            <Todo
              title="Study React"
              description="Understand context, reducers and state management with Redux."  
              isDone={false}
            />

        </div>
    </>
  )
}

export default TodosList