import React from "react";
import '../components/SessaoContato.css'
// import WhatsappQRCode from "../Components/WhatsappQRcode.js";

function SessaoContato() {
    return (
        <div className="container1">
            <div className="container0">
                <div className="texto1">
                    <h2 className="title">Fale Conosco</h2>
                    <hr className="linha1" width="auto"></hr>
                    <p>Endereço: Rua Severino Gonçalves, Nº 331, Brejo do Cruz - PB, 58890-000</p>
                    <p>Horário de Atendimento: De segunda a sexta das 07:00 às 17:00 e nos sábado das 07:00 às 11:00</p>
                    <p>Organização: Francisco Rubens Fernandes</p>
                    <p>Endereço:  Brejo do Cruz, PB</p>
                    <p>E-mail: test@moveis.gmail.com</p>
                </div> 
                <div className="qr-code">
                    {/* <WhatsappQRCode id="whatsapp" phoneNumber="55839961511570" /> */}
                </div>
            </div>
        </div>
    );
}

export default SessaoContato;