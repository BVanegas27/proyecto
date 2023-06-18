import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Detail.css";

function Detail() {
    let { nombre } = useParams();
    let { spiderimg } = useParams();
    let { universo } = useParams();
    let { descripcion } = useParams();
    let { habilidades } = useParams();
    let { debilidades } = useParams();
    let { imagen } = useParams();
    let { altImage } = useParams();

    const navigate = useNavigate();

    return (

        <div className="fondo">
            <div className="contenedor-detalle">
                <img className="contenedorImageD"
                    src={require(`../img/${spiderimg}`)}
                    alt={altImage}
                />
                <div className="contenido">
                    <h2>
                        <strong>Spider: </strong>{nombre}
                    </h2>
                    <h4>
                        <strong>Universo:</strong> {universo}
                    </h4>
                    <p>
                        <strong>Descripción:</strong> {descripcion}
                    </p>
                    <p>
                        <strong>Habilidades:</strong> {habilidades}
                    </p>
                    <p>
                        <strong>Debilidades:</strong> {debilidades}
                    </p>
                    <button onClick={() => navigate("/Universos")}//
                        className="botonDescubrir">Volver a universos
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Detail;