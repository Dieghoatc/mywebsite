import {useState, useEffect} from 'react'

const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me'

const useGetData = () => {
    const [mydata, setData] = useState([])

    //nueva forma de trabajar los ciclos de vida en react
useEffect (() => {
    fetch(api) //llamado a la api
    //cuando se haga la peticion
    //se convierte la respuesta a un objeto .json para que sea leido
    .then(response => response.json())
    //la data pasa a la funcion que actualiza el estado
    .then(data => setData(data))
}, [])
//para exponer la informacion
return mydata
}
export default useGetData