import {createSlice} from '@reduxjs/toolkit';


const initialState =  {
    difficulty:"easy",
    amount:"10",
    questions:[]
}

const quizSlice=  createSlice({
    name:"quiz" ,
initialState,
    reducers:{
        changeDifficulty(state , action){
              
            state.difficulty = action.payload;
            
        }
        ,
        changeAmount(state ,action){
            state.amount =  action.payload
        },
        setQuestions(state , actions){
            state.questions.push(...actions.payload);
        }
    }
})

export const quizActions =  quizSlice.actions ; 

export default  quizSlice;