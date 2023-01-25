const initialState = [{
    id: 1,
    todo: 'Get soul stone',
    done: false
}];


const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[TODO] add todo'){
        return [...initialState, action.payload]
    }



    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Get time stone',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(initialState, addTodoAction)

console.log({state: todos});