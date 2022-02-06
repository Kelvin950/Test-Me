import {createSlice} from '@reduxjs/toolkit';


const initialState =  {
    difficulty:localStorage.getItem("diff") || "easy",
    amount:localStorage.getItem("amount") || "10",
    questions:[],
    scores:0,
    trunc:[],
    userAnswers:[]
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
            state.scores =  0;
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
                --state.scores;
            }
        },
        fillTrucn(state){
            state.trunc.splice(0,state.trunc.length);
            
          for(let i = 0 ;i<state.questions.length/5 ;i++){
                     state.trunc.push(0);
                    }
                  

          },
          fillUserAnswers(state){
            state.userAnswers.splice(0 , state.userAnswers.length);
            for(let i = 0 ;i<state.questions.length ;i++){
                state.userAnswers.push(0);
               }
          },

          setAnswer(state  ,actions){
 
            state.userAnswers[actions.payload.index] = actions.payload.value;
            
          },
          submit(state){
              for(let i = 0 ; i<state.userAnswers.length;i++){
                  if(state.userAnswers[i] === state.questions[i].correct_answer){
                      state.scores++;
                  }
              }
          }

          
             
        }

    }
)

export const quizActions =  quizSlice.actions ; 

export default  quizSlice;