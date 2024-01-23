function Form() {

    return (
        <>
            <form action="">
                <label for="name">Nombre:</label>
                <input type="name" id="name"></input>
                <label for="age">Edad:</label>
                <input type="number" name="number" id="number" min="18" max="100" />
            </form>
        </>
    )
}

export default Form