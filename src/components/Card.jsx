import React from 'react'

const Banner = (props) => {
  return (
    <div 
    style={{
        color: "white",
        backgroundColor: "blue",
        border: "3px solid green",
        margin: "10px"
    }}>
        <p>CONFIRMACIÓN</p>
        <p>Nombre: {props.cliente.name}</p>
        <p>Libro solicitado: {props.cliente.libroRequerido}</p>
        <p>Autor: {props.cliente.generoLibro}</p>
    </div>
  )
}

export default Banner