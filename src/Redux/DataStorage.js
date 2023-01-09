import { createSlice } from "@reduxjs/toolkit";

const initialState  = { Featured_Article : [] , Top_Headlines:[]};

const Storage = createSlice({
    name:'Storage',
    initialState:initialState,
    reducers:{
        Add_Feature_Article(state,action)
        {
            const getdata = action.payload;
            console.log(getdata);
            const newdata = state.Featured_Article.find((val) => val.id === getdata.id);
            if(!newdata)
            {
                state.Featured_Article.push(getdata);
            }
        }
        ,
       Add_Top_Headlines(state,action)
       {
            const getdata = action.payload;
            console.log(getdata);
            const newdata = state.Top_Headlines.find((val) => val.id === getdata.id);
            if(!newdata)
            {
                state.Top_Headlines.push(getdata);
            }
       }
    }
});

export const DataStorageAction = Storage.actions;

export default Storage;