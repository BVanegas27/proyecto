import React from "react";
import "../styles/Item.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Item(props) {
    //const navigate = useNavigate();//
    return (  
     <Link className="Link" to={"/Personajes/" + props.nombre + "/" + props.spiderimg + "/" + props.universo + "/" + props.descripcion + "/" + props.habilidades + "/" + props.debilidades + "/" + props.imagen + "/" + props.altImagen + "/" + props.titulo}>
        <div className="contenedor">
            <img className="contenedorImage"
                src={require(`../img/${props.imagen}`)}
                alt={props.altImage} />
            <h4
                className="contenedorTitulo">{props.titulo}
            </h4>

            <button //onClick={() => navigate("/Personajes")}//
                className="botonDescubrir">Descubrir este universo
            </button>
        </div>
        </Link>
    );
}

export default Item;