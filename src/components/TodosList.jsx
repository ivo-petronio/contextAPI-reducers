import Todo from './Todo.jsx';
import { useTasks } from './TasksProvider.jsx'

function TodosList() {

  const store = useTasks()

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