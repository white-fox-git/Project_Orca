import React from 'react';
import Nav from "./Nav"
import Services from "./Services"
import About from "./About";
import Fotter from "./Fotter";

class Main extends React.Component
{
    render()
    {
        return(
            <div>
                <Nav/>
                <Services/>
                <hr/>
                <About/>
                <Fotter/>
            </div>          
        );
    }
}

export default Main;
