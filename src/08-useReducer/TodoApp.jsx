import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Get soul stone',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Get soul stone2',
            done: false
        },
    ]
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>Todo app 10 , <small>Pendientes(2)</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={initialState} />
                </div>
                <div className="col-5">
                    <h1>What I have to do?</h1>
                    <hr />
                    <TodoAdd onNewTodo={event => handleNewTodo(event)} />
                </div>
            </div>

        </>
    )
}
