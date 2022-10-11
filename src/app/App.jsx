import React, { Component } from 'react';
import './style.scss';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Main from './main/Main.jsx';



class App extends Component {

    componentDidMount(){
        console.log('Estoy iniciando');
    }

    render(){
        return (
            <div>
                <Header />
                <Main/>
                <Footer />

            </div>
        )
    }
}

export default App;