import  {createSlice} from '@reduxjs/toolkit'

const initialState={

    clicked:false

}

const uiSlice =  createSlice({
    name:'ui',
    initialState,
    reducers:{
        clik(state){
             state.clicked =  !state.clicked;
        }
    }
})

export const uiActions =  uiSlice.actions;

export default uiSlice;