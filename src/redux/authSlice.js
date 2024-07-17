import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data";
import { isAuthenticated } from "../helpFunc/isAuthenticated";

const data = JSON.parse(localStorage.getItem('user'))

var initialState = {}

if(data){
    initialState = { auth: {name: data.name,designation: data.designation, about: data.about, email: data.email,  phone: data.phone, token: data.token}, isAuthenticated: true }
}
else{
    initialState = { auth: {name: "", designation: "", about: "", email: "",  phone: 0, token: ""} }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            users.push(action.payload)
        },
        login: (state, action) => {
            state.auth = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify({
                name:state.auth.name,
                designation: state.auth.designation,
                about: state.auth.about,
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