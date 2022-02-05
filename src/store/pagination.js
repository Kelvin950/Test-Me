
import {createSlice} from '@reduxjs/toolkit';


const initialState={
    
    currentPage:1,
    questionsPerPage:5
}

const paginationSlice = createSlice({

    name:'pagination',
    initialState ,
    reducers:{
        changeNumber(state , action){
            state.currentPage =  action.payload
        }
    }
}) ;

export const paginationActions =  paginationSlice.actions;

export default paginationSlice;