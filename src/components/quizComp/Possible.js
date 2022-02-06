import {useDispatch  ,useSelector} from 'react-redux';
import  {quizActions} from '../../store/QuizSlice';
function Possible({name ,value ,answer}) {

const dispatch =  useDispatch()
const scores =  useSelector(state=>state.quiz.scores)
    const checkAnswer = ()=>{
        if(value=== answer){
            dispatch(quizActions.increaseScore());
             console.log(scores);
        }
    }
    return (
          

        <label>
            <input type="radio" onChange={checkAnswer} name={name} value={value}/>
            {value}

        </label>
         
      );
}

export default Possible;