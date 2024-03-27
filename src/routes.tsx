import {createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/Home';
import { Futebol } from './pages/Futebol';
import { Clube } from './pages/Clube';
import { Socio } from './pages/Socio';
import { Loja } from './pages/Loja';
import { Ingresso } from './pages/Ingresso';
import { Contato } from './pages/Contato';
import { ComprarIngresso } from './pages/ComprarIngresso';
import { Login } from './pages/socio/Login';
import { Register } from './pages/socio/Register';
import { RecoverPassword } from './pages/socio/RecoverPassword';
import { SocioIndex } from './pages/socio/SocioIndex';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/futebol",
        element: <Futebol/>
    },
    {
        path: "/clube",
        element: <Clube/>
    },
    {
        path: "/socio",
        element: <Socio/>
    },
    {
        path: "/loja",
        element: <Loja/>
    },
    {
        path: "/ingresso",
        element: <Ingresso/>
    },
    {
        path: "/ingresso-comprar",
        element: <ComprarIngresso/>
    },
    {
        path: "/contato",
        element: <Contato/>
    },
    {
        path: "/socio-login",
        element: <Login/>
    },
    {
        path: "/socio-register",
        element: <Register/>
    },
    {
        path: "/socio-recover-password",
        element: <RecoverPassword/>
    },
    {
        path: "/socio-index",
        element: <SocioIndex/>
    },
    
])

export default router;