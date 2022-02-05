import Main from './main/Main';
import  {useDispatch}  from 'react-redux';
import  {useState} from 'react';
import  {quizActions} from '../store/QuizSlice'
function Settings() {
// const amount =  useSelector(state=>state.quiz.amount);
// const difficulty = useSelector(state=>state.quiz.difficulty);
const [changeDifficulty ,setChangeDifficulty] =  useState('');
const [changeAmount ,setChangeAmount] =  useState('');
const dispatch =  useDispatch();

const onchangeDifficultyHandler = (e)=>{

    console.log(e.target.value);
    setChangeDifficulty(e.target.value)

}

const onchangeAmountHandler = (e)=>{

    console.log(e.target.value);
    setChangeAmount(e.target.value)

}

const onSubmitHandler =(e)=>{
e.preventDefault();
    console.log(changeAmount, changeDifficulty);
     dispatch(quizActions.changeAmount(changeAmount));
     dispatch(quizActions.changeDifficulty(changeDifficulty));
} 
    return ( 
        <Main>
        <form  onSubmit={onSubmitHandler}>
            <div className="mb-3 mt-3">
            <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty" onChange={onchangeDifficultyHandler}  className="form-select">
                    <option value="easy">
                        Easy
                    </option>
                    <option value="medium">
                        Medium
                    </option>
                    <option value="hard">
                            Hard
                    </option>
                </select>

            </div>

            <div className="mb-3 mt-3">
            <label htmlFor="number"> Number of questions: </label>
                <select id="number"  onChange={onchangeAmountHandler}  className="form-select">
                    <option value="20">
                        20
                    </option>
                    <option value="15">
                        15
                    </option>
                    <option value="10">
                            10
                    </option>
                </select>

            </div>
            <button type="submit" className="btn btn-primary">
                 Update
            </button>
        </form>
</Main>
     );
}

export default Settings;