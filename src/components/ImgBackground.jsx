import React from "react";
import './ImgBackground.css'
import imgbk from '../Assets/imgbackground.svg'



export default function ImgBackground({title}){
    return(
        <>
            <div className="container-background">
                <img className="img-background" src={imgbk} alt="imagem padrão de background" />
                <h1 className="titulo-background">{title}</h1>{/* O titulode h1 muda de acordo com a página*/}
            </div>
        </>

    )
}