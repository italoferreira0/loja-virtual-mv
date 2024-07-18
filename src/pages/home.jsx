import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Sessao1 from '../components/Sessao1';
import Missao from '../components/Missao';
import Sessao2 from '../components/Sessao2';
import Detalhes from '../components/Detalhes';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Sessao1/>
      <Missao/>
      <Sessao2/> 
      <Detalhes/>
      <Footer/>
    </>
  );
}

export default Home;