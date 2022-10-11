import React, { Component } from 'react';
import logo from '../../../public/images/logo.svg';
import fondo from '../../../public/images/image-hero.jpg'
import '../header/style.scss';
import hamburguesa from '../../../public/images/icon-hamburger.svg';
import fondo2 from '../../../public/images/image-hero2.jpg';


class Header extends Component {

    render(){
        return (
            
            <header className='header'>
                <img src={fondo} alt="" className='header__fondo'/>
                <img src={fondo2} alt="" className='header__fondo2'/>

                <nav className='header__navar'>
                <img src={logo} alt="" className='header__navar__izquierda'/>
                <img src={hamburguesa} alt="" className='header__navar__hamburguesa' />
                <div className='header__navar__derecha'>
                <div className='header__navar__derecha__letras'>About</div>
                <div className='header__navar__derecha__letras'>careers</div>
                <div className='header__navar__derecha__letras'>Events</div>
                <div className='header__navar__derecha__letras'>Products</div>
                <div className='header__navar__derecha__letras'>Support</div>
                </div>
                
                </nav>              
                <section className='header__navar__abajo'>
                    <div className='header__navar__abajo__contenido'>IMMERSIVE <br /> ESPERIENCES <br /> THAT DELIVER</div>
                </section>
            </header>
           
        )
    }
}

export default Header;