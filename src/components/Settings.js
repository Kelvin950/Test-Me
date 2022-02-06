import Main from './main/Main';
import  {useDispatch ,useSelector}  from 'react-redux';
import  {useState} from 'react';
import  {quizActions} from '../store/QuizSlice';

function Settings() {
// const amount =  useSelector(state=>state.quiz.amount);
// const difficulty = useSelector(state=>state.quiz.difficulty);
const {  difficulty,
    amount} =  useSelector(state=>state.quiz)
const [changeDifficulty ,setChangeDifficulty] =  useState(difficulty);
const [changeAmount ,setChangeAmount] =  useState(amount);

const dispatch =  useDispatch();
console.log(difficulty ,amount);
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
console.log(e.target.amount.value);
console.log(e.target.difficulty.value);
    dispatch(quizActions.changeAmount(e.target.amount.value.trim()));
    dispatch(quizActions.changeDifficulty(e.target.difficulty.value.trim()));
  localStorage.setItem("diff", e.target.difficulty.value.trim());
    localStorage.setItem("amount" , e.target.amount.value.trim());

    
} 
    return ( 
        <Main>
        <form  onSubmit={onSubmitHandler}>
            <div className="mb-3 mt-3">
            <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty" value={changeDifficulty} onChange={onchangeDifficultyHandler}  className="form-select" name="diff">
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
                <select id="number" value={changeAmount} onChange={onchangeAmountHandler}  className="form-select"  name="amount">
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