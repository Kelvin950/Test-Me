
import {createSlice} from '@reduxjs/toolkit';


const initialState={
    
    currentPage:1,
    questionsPerPage:5,
    ShowScore:false
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
        },
        setCurrentpPage(state){
            state.currentPage= 1;
        },
        showScore(state){
            state.ShowScore =  !state.ShowScore;
        }
    }
}) ;

export const paginationActions =  paginationSlice.actions;

export default paginationSlice;