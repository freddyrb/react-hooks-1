import { useCallback, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(100);

    const incrementFather = useCallback(
      () => {
        setCounter( (value) => value + 1);
        //setCounter( counter + 1)
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter(counter+1);
    // }

  return (
    <> 
    <h1>Use CallbackHook: {counter}</h1>
    <hr />

    <ShowIncrement increment = {incrementFather}/>
    </>
  )
}
