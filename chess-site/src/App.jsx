import './App.scss';
import { useState, useEffect, createContext } from "react";
import {CssBaseline} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import RoutesComp from "./components/Routes";


export const UserContext = createContext({})

function App() {

    const [loading, setLoading] = useState(true);
    const [userSession, setUserSession] = useState(true);

    useEffect(() => {
        const fetchUserAuth = async () => {
            try {
                setLoading(true);
                const res = await fetch('/api/isAuth');
                if (!res.ok) return setLoading(false)

                setUserSession(await res.json());
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('There was an error fetch auth', error);
                return;
            }
        }
        fetchUserAuth()
    }, [])

    return (
      <UserContext.Provider value={userSession}>
          <CssBaseline />
          {loading ? <>loading...</> : <RoutesComp />}
      </UserContext.Provider>
    );

}

export default App;
