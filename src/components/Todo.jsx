import './Todo.scss'

function Todo({ task, deleteTask, completeTask }) {

  return (
    <>
        <div className={`todo ${task.isDone ? 'done' : ''}`}>
            <button 
                className="erase"
                onClick={ () => deleteTask(task.id) }
            >
                x erase
            </button>
            <h3>
                {task.title}
            </h3>
            <p>
                {task.description}
            </p>
            <div className="task-check">
                <input
                    name={task.title}
                    id={task.title}
                    type="checkbox"
                    defaultChecked={task.isDone}
                    onChange={ () => completeTask(task.id) }    
                />
                <label for={task.title}>
                    {!task.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo