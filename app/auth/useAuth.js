import {useContext} from 'react';
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default () => {
    const {user, setUser} = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    };

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    };

    return {user, logout, logIn};
}