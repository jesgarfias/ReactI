import React, { Component } from "react";
import "./header.css"
class footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <footer className="footerFirst_container">
                <h2>La segunda guerra mundial</h2>
                <section className="footer_social">
                    <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"/></svg>
                    <svg  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 12 12m-12 0 12-12" stroke="#000"/></svg>
                    <svg  viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-spotify"><path d="M9.992 0C4.474 0 0 4.474 0 9.992s4.474 9.992 9.992 9.992 9.992-4.474 9.992-9.992S15.51 0 9.992 0m4.348 15.683c-.127.329-.355.512-.59.512a.52.52 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a9 9 0 0 1 2.917.32 8.1 8.1 0 0 1 3.146 1.737c.326.289.436.922.245 1.415m1.27-3.063c-.15.329-.42.512-.699.512a.68.68 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32a10.2 10.2 0 0 1 3.726 1.737c.386.288.516.922.29 1.415m.782-2.996a.96.96 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721s.165-1.12.693-1.272c.076-.022 1.885-.534 4.4-.62a18.6 18.6 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.99.99 0 0 1-.858.513"/></svg>
                </section>
                <section>
                    <h3>Más información</h3>
                    <nav className="footer_nav">
                        <a className="footer_link" href="">Libros</a>
                        <a className="footer_link" href="">Documentales</a>
                        <a className="footer_link" href="">Peliculas</a>
                    </nav>
                </section>
            </footer>
        )
    }
}

export default footer