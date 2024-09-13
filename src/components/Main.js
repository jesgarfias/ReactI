import React, { Component } from "react";
import Form from "./form";
import Batle from "../assets/Batle.png"
class Main extends Component{
    constructor(){
        super()
        this.state={status: "enviar"}
    }
    componentDidMount(){
        const {status}=this.state;
        console.log("el componente se ha mostrado");
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState);
        if(prevState.status !== this.state.status){
            alert("Examen enviado con exito")
        }
    }
    render(){
        return(
            <main>
                <section className="mainFirst_container">
                    <h2>Los inicios</h2>
                    <p>El comienzo del conflicto se suele situar en el 1 de septiembre de 1939, con la invasión alemana de Polonia, 
                        cuando Hitler se decidió a la incorporación de una de sus reivindicaciones expansionistas más delicadas: El Corredor Polaco,
                        que implicaba la invasión de la mitad occidental de Polonia; la mitad oriental, junto con Estonia, Letonia y Lituania fue ocupada por la Unión Soviética, 
                        mientras que Finlandia logró mantener su independencia de los soviéticos guerra de Invierno. El Reino Unido y Francia le declararon la guerra a Alemania, que esperaban como una repetición de la guerra de trincheras «guerra de mentira» para la que habían tomado toda clase de precauciones línea Maginot que demostraron ser del todo inútiles. 
                    </p>
                </section>
                <section className="mainSecond_container">
                    <h2>Cronología</h2>
                    <section className="container_info">
                        <section>
                            <p>En general se considera que la guerra comenzó en Europa el 1 de septiembre de 1939 con la invasión alemana de Polonia, que provocó la declaración de guerra de Reino Unido y Francia a Alemania dos días después, seguida por la invasión soviética de Polonia el 17 de septiembre de 1939. Las fechas de inicio de las hostilidades en la zona del océano Pacífico son varias y anteriores en el tiempo: La segunda guerra chino-japonesa que comenzó el 7 de julio de 1937 o incluso la invasión japonesa de Manchuria a partir del 19 de septiembre de 1931.</p>
                            <p>
                                Otros coinciden con el historiador británico A. J. P. Taylor, que sostenía que la guerra chino-japonesa y la guerra en Europa y sus colonias 
                                ocurrieron simultáneamente y ambas se desataron en 1941. Otra fecha de inicio a veces usada para la Segunda Guerra Mundial es la invasión italiana de Etiopía desde el 3 de octubre de 1935. 
                                El también historiador Antony Beevor opina que la conflagración comenzó con la batalla de Jaljin Gol entre Japón y las fuerzas de Mongolia y la Unión de Repúblicas Socialistas Soviéticas , 
                                de mayo a septiembre de 1939.En este artículo se seguirá la datación convencional.
                            </p>
                        </section>
                        <img src={Batle}/>
                    </section>                    
                </section>
                <h2>Examen</h2>
                <section className="main_form">
                    <Form/>
                    <button onClick={()=>this.setState({status: "enviado"})}>{this.state.status}</button>
                </section>
            </main>
        )
    }
}
export default Main