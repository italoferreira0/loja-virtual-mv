import React from 'react';
import Entrega from "../Assets/Entrega.png";
import Confiabilidade from "../Assets/Confiabilidade.png";
import Garantia from "../Assets/Garantia.png";
import Qualidade from "../Assets/Qualidade.png";
import "../components/Detalhes.css";

function Detalhes(){
    return(
        <>
        <div id='Area-detalhes'>
          <div className='container-detalhes'>
                <div className="elemento-icon">
                    <div id="background-config">
                       <img className='imagem-icon' src={Qualidade} alt="Icone de Entrega Rapida"/> 
                    </div>
                  <h3>Qualidade</h3>
                </div>
                <div className="elemento-icon">
                  <div id="background-config">
                     <img className='imagem-icon' src={Garantia} alt="Icone de Entrega Rapida"/> 
                  </div>
                  <h3>Garantia</h3>
                </div>  
                <div className="elemento-icon">
                  <div id="background-config">
                     <img className='imagem-icon' src={Entrega} alt="Icone de Entrega Rapida"/> 
                  </div>
                  <h3>Entrega Rapida</h3>
                </div>
                <div className="elemento-icon">
                  <div id="background-config">
                    <img className='imagem-icon' src={Confiabilidade} alt="Icone de Entrega Rapida"/> 
                  </div>
                  <h3>Confiabilidade</h3>      
                </div>   
          </div>                   
        </div>
        </>
    )
}
export default Detalhes;