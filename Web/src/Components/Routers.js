import React from 'react';
import Main from "./Main";
import {Route, Routes} from "react-router-dom";
import Drive from "./Login";

class Routers extends React.Component
{
    render()
    {
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route onUpdate={() => window.scrollTo(0, 0)} path="/Login" element={<Drive/>}/>
                </Routes>
            </div>          
        );
    }
}

export default Routers;