import {paginationActions} from '../store/pagination';
import {fetchQuestions} from  '../store/quizActions';
import {useHistory} from 'react-router-dom'
import {useDispatch} from  'react-redux'
function ModalButton(props) {
    const history =  useHistory();
     const dispatch  =  useDispatch();
    const closeModal=()=>{
        history.push("/");
        dispatch(paginationActions.showScore());
    }
const playAgain = ()=>{
    dispatch(fetchQuestions(props.url));
    dispatch(paginationActions.showScore());
}
    return ( 
         <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={playAgain} >Play again</button>
        <button type="button" className="btn btn-danger"  onClick={closeModal}>Close</button>
      </div>
     );
}

export default ModalButton;
