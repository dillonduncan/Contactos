import data from "../../../data/datos(personas).json"

export default function obtenerPersonas() {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}