import React, { Component } from 'react';
import interactive from "../../../public/images/image-interactive.jpg";
import deep from "../../../public/images/image-deep-earth.jpg";
import night from "../../../public/images/image-night-arcade.jpg";
import soccer from "../../../public/images/image-soccer-team.jpg";
import grid from "../../../public/images/image-grid.jpg";
import up from "../../../public/images/image-from-above.jpg";
import pocket from "../../../public/images/image-pocket-borealis.jpg";
import curiosity from "../../../public/images/image-curiosity.jpg";
import make from "../../../public/images/image-fisheye.jpg";
import './style.scss'

class Main extends Component {
    render() {
        return (
            <main className='main'>
                <section className='main__image'>
                <figure>
                    <img src={interactive} alt="" className='main__image__interactive'/>
                </figure>
                <div className='main__image__contText'>
                    <h1 className='main__image__contText__title'>THE LEADER IN INTERACTIVE VR</h1>
                    <p className='main__image__contText__parrafo'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
                </section>
                <section className='main__creations'>
                    <h2>OUR CREATIONS</h2>
                    <button className='main__creations__boton'>SEE ALL</button>
                </section>
                <section className='main__containercards'>
                    <div className='main__containercards__cards'>
                        <img src={deep} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>DEEP EARTH</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={night} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>NIGHT ARCADE</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={soccer} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>SOCCER TEAM VR</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={grid} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>THE   GRID</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={up} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>FROM UP ABOVE VR</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={pocket} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>POCKET BOREALIS</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={curiosity} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>THE CURIOSITY</p>
                    </div>
                    <div className='main__containercards__cards'>
                        <img src={make} alt=""  className='main__containercards__cards__card'/>
                        <p className='main__containercards__cards__text'>MAKE IT FISHEYE</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main;