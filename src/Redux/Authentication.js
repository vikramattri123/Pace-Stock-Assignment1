import { createSlice } from "@reduxjs/toolkit";

const getToken = localStorage.getItem('TokenId');

let TokenVal = false;

let TokenId = '';
if(!!getToken)
{
  TokenVal=true;
  TokenId = getToken;
}

const initialState = { TokenStatus: TokenVal , Token :TokenId,User : ''};


const AuthReducer = createSlice({
    name:'Auth',
    initialState:initialState,
    reducers:{
        Login(state,action)
        {
        state.Token = action.payload;
        state.TokenStatus = true;
        state.User = '';
        localStorage.setItem('TokenId',action.payload);
        },
        Logout(state,action)
        {
            state.Token = '';
            state.TokenStatus = false;
            localStorage.removeItem('TokenId');
        }
    }
});

export const AuthAction = AuthReducer.actions;

export default AuthReducer;