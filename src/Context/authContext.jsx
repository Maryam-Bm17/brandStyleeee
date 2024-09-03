import { createContext } from "react";


const AuthContext = createContext({
    isLogedIn: 'false',
    userId: null,
    userInfos: null,
    login: () => { },
    logout: () => { }
});

export default AuthContext;

