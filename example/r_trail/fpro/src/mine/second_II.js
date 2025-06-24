import React from "react";
import '../App.css';
import loogo from "./img/watch_logo.jpg"

function SecondII(){
    return(
        <div className="banner2 banner2b">     
            <div>
                <p>Thinstant Classic</p>
                <div>
                    <img src={loogo} alt="" className="logo2b"/>
                </div>
                <div>
                    <button className="btn btn-primary p-1 rounded-5  blearn">Learn More</button>
                    <button className="btn btn-light p-1 px-4 border-primary rounded-5 fs-5 mx-3 bbuy">Buy</button>
                </div>
            </div>           
            
        </div>
       

    );
};

export default SecondII;