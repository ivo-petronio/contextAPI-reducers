import { createContext, useReducer, useContext } from 'react'
export const TasksContext = createContext([])

const initialTasks = [
  { id: 0, title: 'Banho do Fry', description: 'Banhar com shampoo Huggies e Cetoconazol', isDone: false },
  { id: 1, title: 'Banho da Bulma', description: 'Banhar com shampoo miconazol e clorexidina', isDone: false },
  { id: 2, title: 'Banho da Leela', description: 'Banhar com shapoo Huggies', isDone: false }
];


function TasksProvider({ children }) {

  const [tasks, dispatch] = useReducer(TasksReducer, initialTasks)

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TasksContext.Provider>
    </>
  )
}

function useTasks() {
  return useContext(TasksContext)
}

const TasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'deleted':
      if (confirm("Are you sure you want to delete this task?"))
        return tasks.filter(task => task.id !== action.id)

    case 'completed':
      return tasks.filter(task => {
        if (task.id === action.id) {
          task.isDone = !task.isDone
        }
        return [
          ...tasks, task
        ]
      })
  }
}

export {
  TasksProvider,
  useTasks
}