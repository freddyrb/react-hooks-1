import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('I regenerate myself again')

    return (
    <button
    className="btn btn-primary"
    onClick={()=>{ 
        increment();
     }}>Increment</button>
  )
}
)