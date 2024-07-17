import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data";

const data = JSON.parse(localStorage.getItem('user'))

var initialState = {}

if(data){
    initialState = { name: data.name,designation: data.designation, about: data.about, email: data.email,  phone: data.phone, token: data.token }
}
else{
    initialState = { name: "", designation: "", about: "", email: "",  phone: 0, token: "" }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            // state.auth = action.payload;
            // state.auth = {
            //     name: action.payload.name,
            //     designation: action.payload.designation,
            //     about: action.payload.about,
            //     email: action.payload.email,
            //     phone: action.payload.phone,
            //     token: action.payload.token
            // }
            // state.isAuthenticated = false;
            users.push(action.payload)
        },
        login: (state, action) => {
            // state.auth = action.payload;
            console.log(action.payload)
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify({
                name:state.auth.name,
                email:state.auth.email,
                phone: state.auth.phone,
                token: state.auth.token
            }))
        },
        logout: (state) => {
            state.auth = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    },
    
})

export const {register, login, logout} = authSlice.actions

export default authSlice.reducer