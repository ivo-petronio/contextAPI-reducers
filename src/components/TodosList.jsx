import Todo from './Todo.jsx';
import { useContext } from 'react'
import { TasksContext } from './Context'

function TodosList() {

  const store = useContext(TasksContext)
fjsdklfjsklfjsdklfjsklfjsfkljsçkl
  return (
    <>
      <div className="todos">
        {
          store.tasks.map( task =>
            <Todo
              key={task.id}
              task={task}
            />
          )
        }
      </div>
    </>
  )
}

export default TodosList