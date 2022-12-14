import Item from "./Item";
function List() {
    return (
        <>
            <h1> my list </h1>
            <ul>
                <Item marca="Fiat" ano_lacamento={1990} />
                <Item marca="Uno" ano_lacamento={2000} />

            </ul>
        </>
    )
}

export default List;