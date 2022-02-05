import  {configureStore} from '@reduxjs/toolkit';
import uiSlice from './ui';
import quizSlice from './QuizSlice';
import  paginationSlice from './pagination';
const store =  configureStore({

    reducer:{
        ui:uiSlice.reducer,
        quiz:quizSlice.reducer,
        pagination:paginationSlice.reducer
    }
})

export default store