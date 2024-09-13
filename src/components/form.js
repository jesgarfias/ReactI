import React, { Component } from "react";
import "./header.css"
class Form extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <form className="form_container">
                <section className="form_userInfo">
                    <span>Nombre de usuario</span>
                    <input type="text" name="userName" id=""/>
                </section>
                <section>
                    <p>1 ¿En que año comenzó la segunda guerra mundial?</p>
                    <input type="radio" name="startYear" id="1940" value="1940"/>
                    <label htmlFor="1940">1940</label>
                    <input type="radio" name="startYear" id="1939" value="1939"/>
                    <label htmlFor="1939">1939</label>
                </section>
                <section>
                    <p>2 ¿En que año terminó la segunda guerra mundial?</p>
                    <input type="radio" name="finishtYear" id="1941" value="1941"/>
                    <label htmlFor="1941">1941</label>
                    <input type="radio" name="finishYear" id="1945" value="1945"/>
                    <label htmlFor="1945">1945</label>
                </section>
                <section>
                    <p>3 ¿En donde se origino?</p>
                    <input type="radio" name="origin" id="germany" value="Germany"/>
                    <label htmlFor="Germany">Alemania</label>
                    <input type="radio" name="origin" id="italy" value="Italy"/>
                    <label htmlFor="Italy">Italia</label>
                </section>
            </form>
            </>
        )
    }
}
export default Form