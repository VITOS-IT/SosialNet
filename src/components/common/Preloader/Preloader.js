import React from "react";
import preloader from "../../../img/2.svg";

const Preloader = (props) =>{
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader