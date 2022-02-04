import  {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui'
import quizSlice from './QuizSlice'
const store =  configureStore({

    reducer:{
        ui:uiSlice.reducer,
        quiz:quizSlice.reducer
    }
})

export default store