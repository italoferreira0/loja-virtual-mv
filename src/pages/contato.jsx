import React from 'react';
import Navbar from "../components/Navbar"
import ContatoInfo from '../components/ContatoInfo';
import ContatoFrase from '../components/ContatoFrase';

function Contato() {
  return (
    <>
      <Navbar/>
      {/* <h1>Página de Contato</h1> */}
      <ContatoInfo/>
      <ContatoFrase/>
    </>
  );
}

export default Contato;




