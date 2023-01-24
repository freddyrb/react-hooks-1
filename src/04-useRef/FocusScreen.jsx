import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const onClickLocal = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Say my name"
                className="form-control"
            />

            <button onClick={onClickLocal} className="btn btn-primary mt-2">set focus</button>

        </>
    )
}
