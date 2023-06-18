import React from "react";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login (){
    const [nombre,setNombre] = useState ("")
    const [contraseña,setContraseña] = useState ("")
    const [error,setError] = useState(false)
    const navigate = useNavigate ()
    const handleSubmit = (e) => {
        e.preventDefault()

        if(nombre === "Brandon" && contraseña === "12345"){
            setError(true)
            navigate('/Universos')
        }

        setError(false)

    }

    return(
        <div className="fondoLogin">
        <div className="contenedorLogin">
        <div className="login">
            <h1>Login</h1>
        <form 
        className="forma"
        onSubmit={handleSubmit}
        >
            <input 
            type="text"
            value={nombre}
            onChange={(e => setNombre(e.target.value))}
            />
            <input
            type="password"
            value={contraseña}
            onChange={e => setContraseña(e.target.value)}
            />
            <button>Ingresar</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
        </div>
        </div>
        </div>
    );
}

export default Login;