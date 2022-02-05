import  {createSlice} from '@reduxjs/toolkit'

const initialState={

    clicked:false,
    loader:{
        status:'',
        message:''
    }

}

const uiSlice =  createSlice({
    name:'ui',
    initialState,
    reducers:{
        clik(state){
             state.clicked =  !state.clicked;
        } ,
        showLoader(state ,action){
          
            state.loader =  {
                status:action.payload.status,
                message:action.payload.message
            }

        }
    }
})

export const uiActions =  uiSlice.actions;

export default uiSlice;