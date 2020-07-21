import React from "react";
import preloader from "../../../img/2.svg";

const Preloader = (props) =>{
    return <div style={{backgroundColor: 'white'}}>
        <img alt='something' src={preloader}/>
    </div>
}

export default Preloader