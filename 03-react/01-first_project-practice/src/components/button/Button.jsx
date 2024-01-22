import '../../assets/react.svg'

function Button() {
    function mostrar() {
        alert("¡Mostró!")
    }
    return (
            <>
            <button onClick={mostrar}>Presiona</button>
        </>
    )
}

export default Button