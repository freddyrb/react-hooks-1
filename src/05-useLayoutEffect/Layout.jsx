import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {

    const { counter, increment, decrement } = useCounter(2);

    const api = `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`;

    console.log({counter, api})

    const { data, isLoading, hasError } = useFetch(api);

    console.log(data)

    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>Breaking bad News!</h1>
            <hr />

{
    isLoading ? (
            <div className="alert alert-info text-center">
                Loading...
            </div>

    ) :
    (
        data.map( (item) =>  
            
            <blockquote className="blockquote text-end"
                style={{display:'flex'}}>
                <p className="mb-1"> {item.quote}</p>
                <footer className="blockquote-footer">{item.author}</footer>
            </blockquote>        
        
        )
    
    )
}


<button onClick={ () => increment()} className="btn btn-primary" >More quotes</button>
<button onClick={ () => decrement()} className="btn btn-primary" >Less quotes</button>

        </>

    )
}
