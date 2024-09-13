import React, { Component } from "react";
import "./header.css";
class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <header className="headerMain_container">
                <section className="headerLogo_container">
                    <svg width="80" height="80" viewBox="0 -8 72 72" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M39.18 21.67A6.5 6.5 0 0 0 39 20h25.08v-3h-27a6.37 6.37 0 0 0-3.28-1.59v-1.49s.06 0 .06-.07a3.19 3.19 0 0 0-3.2-3.15H17.38V16A6.32 6.32 0 0 0 14 21.67s0 0 0 .07a10 10 0 0 1 1.21-.07ZM57.84 39.2v-.05a7.22 7.22 0 0 0 6-7.1V32a7.23 7.23 0 0 0-7.19-7.3H15.23A7.34 7.34 0 0 0 7.92 32v.06A7.22 7.22 0 0 0 14 39.15v.05a6.17 6.17 0 0 0 6.16 6.1H51.8a6 6 0 0 0 6-6.1Zm-16.75 2.93a3.07 3.07 0 1 1 3.08-3.07 3.06 3.06 0 0 1-3.08 3.07m-13.47-3.07a3.08 3.08 0 1 1 3.07 3.07 3.07 3.07 0 0 1-3.07-3.07m-10.4 0a3.08 3.08 0 1 1 3.07 3.07 3.07 3.07 0 0 1-3.07-3.07m34.27 3.07a3.07 3.07 0 1 1 3.08-3.07 3.06 3.06 0 0 1-3.08 3.07"/></svg>
                    <p className="header_text">WWII</p>
                </section>
                <section className="header_title">
                    <h1>La segunda guerra mundial</h1>
                </section>
                <nav className="header_nav">
                    <a className="header_link" href="">Frentes de batalla</a>
                    <a className="header_link" href="">Antecedentes</a>
                    <a className="header_link" href="">Testimonios</a>
                </nav>
            </header>
        )
    }
}
export default Header;