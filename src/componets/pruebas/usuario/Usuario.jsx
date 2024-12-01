import App from "../../../App"

const Usuario = (usuario) => {
    return <div>
        <h1 >Nombre: {usuario.nombre}</h1>
        <p>Apodo: {usuario.apodo}</p>
        <p>Edad: {usuario.edad}</p>
    </div>
}
export default Usuario;