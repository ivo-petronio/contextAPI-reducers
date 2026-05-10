import './Todo.scss'
import { useContext } from 'react'
import { TasksContext } from './Context'

function Todo({ task }) {

    const store = useContext(TasksContext)

    return (
        <>
            <div className={`todo ${task.isDone ? 'done' : ''}`}>
                <button
                    className="erase"
                    onClick={() => store.dispatch({
                        type: 'deleted',
                        id: task.id
                    })}
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
                        onChange={() => store.dispatch({
                            type: 'completed',
                            id: task.id
                        })}
                    />
                    <label htmlFor={task.title}>
                        {!task.isDone ? 'To-Do' : 'Done'}
                    </label>
                </div>
            </div>

        </>
    )
}

export default Todo