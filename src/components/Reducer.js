export const TasksReducer = ( tasks, action ) => {
    switch (action.type) {
        case 'deleted':
            if (confirm("Are you sure you want to delete this task?"))
                return tasks.filter( task => task.id !== action.id )

        case 'completed':
            return tasks.filter( task => {
                if (task.id === action.id) {
                    task.isDone = !task.isDone
                }
                return [
                    ...tasks, task
                ]
            })
    }
}