import {createSlice} from '@reduxjs/toolkit';


const initialState =  {
    difficulty:"easy",
    amount:"10",
    questions:[],
    scores:0,
    trunc:[]
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
            state.questions= actions.payload
        },
        increaseScore(state){

            ++state.scores;
        }
        ,
        decreaseScore(state){
            if(state.scores ===0){
                state.scores =0;
            }
            else{
                state.scores--;
            }
        },
        fillTrucn(state){
            state.trunc.splice(0,state.trunc.length);
            
          for(let i = 0 ;i<state.questions.length/5 ;i++){
                     state.trunc.push(0);
          }
             
        }

    }
})

export const quizActions =  quizSlice.actions ; 

export default  quizSlice;