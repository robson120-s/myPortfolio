import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function First(){
    return(
        <div className="banner1">            
            <div>
                <h1>iPhone </h1>
                <p>Meet the iPhone 16 family</p>
                <div className="banbutton">
                    <button className="btn btn-primary p-2 rounded-5 fs-5 learnm">Learn More</button>
                    <button className="btn btn-light p-2 border-primary rounded-5 fs-5 mx-3 shop">Shop iPhone</button>
                </div>                
                <p className="quote1 gradient">Bulit For Apple Intelligence</p>
            </div>
        </div>
       

    );
};

export default First;