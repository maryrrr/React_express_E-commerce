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
    console.log(res.data.token);
    if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
         console.log(res.data.token)
    }
    }
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      };

    

    const getUser = async () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(
        API_URL + "/users/getUser",
        {
         headers: {
            authorization: token,
        },
    }
    
    
        )
        console.log(res.data);
        dispatch({
            type: "GET_USER",
            payload: Array.isArray(res.data) ? res.data : [res.data],
        
        })
        
        return res;
        
        };
    

        const newUser = async (userData) => {
            const res = await axios.post(
            API_URL + "/users/newUser",
            userData
            );
            console.log(res.data)
            dispatch({
                type: "NEW_USER",
                payload: res.data,
            
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
            logout,
            newUser,
        }}
        >
        {children}
        </UserContext.Provider>
        );
        };


export const UserContext = createContext(initialState);






