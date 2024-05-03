import React from 'react';
import HeaderSvg from './HeaderSvg';
import './Header.scss';

const Header = () => {
    return (
        <div id="banner">
            <div className="intro">
                <div className="intro-inner">
                    <HeaderSvg />
                    <h5 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1900">WEB/SOFTWARE DEVELOPER</h5>
                    <div className="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5b">
                        <a href="https://github.com/justDare" target="_blank" rel="noopener noreferrer">
                            <i data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" className="hi-icon fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dariansampare/" target="_blank" rel="noopener noreferrer">
                            <i data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2100" className="hi-icon fab fa-linkedin-in"></i>
                        </a>
                        <a href="http://www.daretoprogram.ca" target="_blank" rel="noopener noreferrer">
                            <i data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2200" className="hi-icon fas fa-blog"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;