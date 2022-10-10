import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./auth/Login";
import Signup from "./auth/Signup";

import { UserContext} from "../App";
import SLand from "./sLand";

function RoutesComp() {
    const userContext = useContext(UserContext)
    return (
        <>
            <Routes>
                {userContext.email && (
                    <Route path='/' element={<>Welcome {userContext.email}</>} />
                )}
                {!userContext.email && (
                    <>
                        <Route path='/' element={<SLand />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </>
                )}
            </Routes>
        </>
    )
}

export default RoutesComp