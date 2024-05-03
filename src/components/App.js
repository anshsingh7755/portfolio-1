import React from 'react';
import Header from './landing/header/Header';
import './App.scss';
import Navbar from './common/Navbar';
import About from './landing/About';
import TimeLine from './landing/experience/TimeLine';
import LanguagesDisplay from './landing/experience/LanguagesDisplay';
import Portfolio from './landing/portfolio/Portfolio';
import Contact from './landing/Contact';
import Footer from './common/Footer';

class App extends React.Component {

    render() {
        return (
            <div id="main">
                <Navbar />
                <Header />
                <About />
                <TimeLine />
                <LanguagesDisplay />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        );
    }

}

export default App;