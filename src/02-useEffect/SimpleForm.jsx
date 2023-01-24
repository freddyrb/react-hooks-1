import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'freddy',
        email: 'hsa@123.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value

        })
    }


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

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])




    return (
        <>
            <h1>Simple form</h1>
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

            {
                username === 'freddyrb' && <Message />
            }

        </>
    )
}
