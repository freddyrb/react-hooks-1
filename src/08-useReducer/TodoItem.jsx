export const TodoItem = ( {item} ) => {
    return (
        <>
            {/* Todo item */}
            <li className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">{item}</span>
                <button className="btn btn-danger">Delete</button>
            </li>
        </>
    )
}
