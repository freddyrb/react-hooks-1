import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos=[] }) => {
    return (
        <>
        {
            todos.map( task =>
            <ul className="list-group" key={new Date().getTime()*5}>
                <TodoItem
                    key={new Date().getTime()*7}
                    item = {task.description}
                />
            </ul>           
            )
}
        </>
    )
}
