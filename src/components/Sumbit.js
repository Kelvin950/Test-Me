import {useSelector , useDispatch} from 'react-redux';
import {quizActions} from '../store/QuizSlice'
import {paginationActions} from '../store/pagination'

function Submit() {
    const  dispatch =useDispatch();
 const score = useSelector(state=>state.quiz.scores);
 console.log(score);
const onClickHandler=()=>{

    dispatch(quizActions.submit());
    dispatch(paginationActions.showScore());
}
    return ( 
        <div>
            <button onClick={onClickHandler} className="btn btn-primary" >
                Submit
            </button>
        </div>
     )
    ;
}

export default Submit;
