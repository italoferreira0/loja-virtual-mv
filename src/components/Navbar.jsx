import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                <div className='logoempresa'>
                    <h1 className="titleh1">MARCENARIA</h1>
                    <h1 className="titleh2">PAI <samp id="spam1">&</samp>FILHO</h1>
                </div>
                <a href="/">HOME</a>
                <a href="/Empresa">EMPRESA</a>
                <a href="/Contato">CONTATO</a>
                <a href="/Portfolio">PORTFOLIO</a>
                <a href="/Orcamento"  id='item-last'>ORÇAMENTO</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;
