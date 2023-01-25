import PropTypes from 'prop-types'
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const [inputValue, setInputValue] = useState ('');

    const {description ,onInputChange, onResetForm} = useForm({

        description:''
    });
    
    const onSubmitNewTodo = (event) => {
        
        console.log(event)
        event.preventDefault();
        if(description.length <= 1) return;
        onNewTodo(description.trim());

    }

    return (
        <>
            {/* TodoAdd emita el valor con onNewTodo, debe ser un TODO*/}
            {/* { id, description, done} */}
            <form onSubmit={ onSubmitNewTodo }>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Create the task"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    >
                </input>
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                   >Insert</button>
            </form>
            {/* Fin TodoAdd */}
        </>
    )
}


TodoAdd.propTypes = {

    onNewTodo: PropTypes.func.isRequired

}