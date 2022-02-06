
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
        },
        showNextSlide(state){
            ++state.currentPage;
        },
        showPrevSlide(state){
            --state.currentPage;
        }
    }
}) ;

export const paginationActions =  paginationSlice.actions;

export default paginationSlice;