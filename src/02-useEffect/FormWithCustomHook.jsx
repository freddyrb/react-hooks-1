import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
            username: '',
            email: '',
            password : ''
    });

    //const { username, email, password } = formState;

    

    useEffect(() => {
        // console.log('Use effect called!!')
    }, []
    );

    useEffect(() => {
        // console.log('Use effect called on FormState Change!!')
    }, [formState]
    );

    useEffect(() => {
        // console.log('Use effect called on Email Change!!')
    }, [email]
    );


    return (
        <>
            <h1>Form Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}>

            </input>
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}>

            </input>
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}>

            </input>

            {
                username === 'freddyrb' && <Message />
            }

            <button onClick={ onResetForm } className="btn btn-secondary mt-2">Reset</button>

        </>
    )
}
