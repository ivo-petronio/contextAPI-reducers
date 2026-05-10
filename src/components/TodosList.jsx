import Todo from './Todo.jsx';
import { useContext } from 'react'
import { TasksContext } from './Context'

function TodosList() {

  const store = useContext(TasksContext)

  function eraseHandler(id) {
    store.dispatch({
      type: 'deleted',
      id: id
    })
  }

  function completeHandler(id) {
    store.dispatch({
      type: 'completed',
      id: id
    })
  }

  return (
    <>
      <div className="todos">
        {
          store.tasks.map( task =>
            <Todo
              key={task.id}
              task={task}
              deleteTask={ id => eraseHandler(id) }
              completeTask={ id => completeHandler(id) }
            />
          )
        }
      </div>
    </>
  )
}

export default TodosList