import {useDispatch  } from 'react-redux';
import  {quizActions} from '../../store/QuizSlice';
function Possible({name ,value ,answer}) {

const dispatch =  useDispatch();

    const checkAnswer = ()=>{
        
        dispatch(quizActions.setAnswer({index:name , value:value}));
      
    }
   
    return (
          

        <label>
            <input type="radio" onChange={checkAnswer} name={name} value={value}/>
            {value}

        </label>
         
      );
}

export default Possible;