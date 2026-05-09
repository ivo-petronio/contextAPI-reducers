import Todo from './Todo.jsx';
import { useContext } from 'react'
import { TasksContext } from './Context'

function TodosList() {

  const store = useContext(TasksContext)


  function eraseHandler(id) {
    if(confirm("Are you sure you want to delete this task?"))
    {
      store.setTasks( oldstate => oldstate.filter( item => item.id !== id) )
    }
  }

  function completeHandler(id) {
    store.setTasks( oldstate => {
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