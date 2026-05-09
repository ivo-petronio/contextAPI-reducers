import './Todo.scss'

function Todo({ task }) {

  return (
    <>
        <div className={`todo ${task.isDone ? 'done' : ''}`}>
            <button className="erase">x erase</button>
            <h3>
                {task.title}
            </h3>
            <p>
                {task.description}
            </p>
            <div className="task-check">
                <input type="checkbox" checked={task.isDone} />
                <label>
                    {!task.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo