import { useState } from "react";

import { Login } from "./socio/Login";
import { SocioIndex } from "./socio/SocioIndex";

export function Socio(){

    const[islogged, setIsLogged] = useState(true);

    return (
        <div>
            {!islogged && (
                <Login/>
            )}
            { islogged && (
                <SocioIndex/>
            )}
            
            
        </div>
    )
}