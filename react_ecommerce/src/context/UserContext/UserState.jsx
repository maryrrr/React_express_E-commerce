import { createContext ,useReducer} from 'react'
import axios from "axios";
import UserReducer from './UserReducer'

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
token: token ? token : null,
user: null,
};

const API_URL = "http://localhost:3001";

export const UserProvider = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const login = async (user) => {
        const res = await axios.post(API_URL + "/users/login", user);
        dispatch({
            type: "LOGIN",
            payload: res.data,
    });
    
    if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
    }
    }
    const getUser = async () => {
        const res = await axios.get(
        API_URL + "/users/getUser",
        );
        console.log(res.data)
        dispatch({
            type: "GET_USER",
            payload: res.data[0],
        
        })
        
        return res;
        
        };

    return (

        <UserContext.Provider
        
        value={{
            token: state.token,
            user: state.user,
            login,
            getUser,
        }}
        >
        {children}
        </UserContext.Provider>
        );
        };


export const UserContext = createContext(initialState);