import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [client, setClient] = useState({
        name: "",
        libroRequerido: "",
        generoLibro: ""
    });
    const [mostrar, setMostrar] = useState(false);
    const [errorForm , setErrorForm] = useState(false);

    const formHandler = (e) => {
        e.preventDefault()
        validaciones();
    }

    const validaciones = () => {
        let noTieneEspaciosAlInicio = true;
        client.name.trimStart().length == client.name.length ? null : noTieneEspaciosAlInicio = false ;
        let a = client.name.trimStart().length;
        let b = client.name.length;
        console.log(a);
        console.log(b)
            
        
        if(client.name.length >= 3 && client.libroRequerido.length >= 6 && client.generoLibro.length >= 6 && noTieneEspaciosAlInicio) {
            setMostrar(true);
            setErrorForm(false);
        } else {
            setMostrar(false);
            setErrorForm(true);
        }
        
    }
    const error = () => "Por favor chequea que la información sea correcta";

  return (
    <>
    <form onSubmit={formHandler}>
        <label >Nombre y Apellido</label>
        <input type="text" onChange = {(e)=>setClient({...client, name: e.target.value})}/>
        <br />
        <label >¿Que libro deseas apartar?</label>
        <input type="text" onChange = {(e)=>setClient({...client, libroRequerido: e.target.value})}/>
        <br />
        <label >¿Cual es el autor del libro?</label>
        <input type="text" onChange = {(e) => setClient({...client, generoLibro: e.target.value})}/>
        <br />
        <button>Solicitar libro</button>

        {mostrar ? <Card cliente = {client}/> : null}
        <h3 style={{color: "red"}}>{errorForm ? error() : null}</h3>
    </form>
    </>
  )
}

export default Form