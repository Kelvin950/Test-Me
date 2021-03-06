
import  QuizComp from '../components/quizComp/QuizComp';
import {useLocation} from 'react-router-dom';
import {Fragment, useEffect}  from 'react';
import {useSelector , useDispatch} from 'react-redux';
import Loader from '../components/main/Loader/Loader'
import  {fetchQuestions} from '../store/quizActions';
import Pagination from '../components/Pagination';
import {paginationActions}  from '../store/pagination';
import ShowScore from '../components/ShowScore';
import Submit from '../components/Sumbit';
 const Quiz =  ()=> {
    const score = useSelector(state=>state.quiz.scores);
    const location =  useLocation();
console.log(location.search);
const category=(location.search.slice(location.search.length-2 ,location.search.length));
const amount =  useSelector(state => state.quiz.amount);
const difficulty =  useSelector(state=>state.quiz.difficulty);
const loader=  useSelector(state =>state.ui.loader);
const  questions =  useSelector(state=>state.quiz.questions);
const trunc = useSelector(state=>state.quiz.trunc);
const currentPage =  useSelector(state=>state.pagination.currentPage)
const postperPage =  useSelector(state=>state.pagination.questionsPerPage);
const showModal =  useSelector(state=>state.pagination.ShowScore);
const dispatch =  useDispatch();
const url =  `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&encode=base64`;
console.log(loader);
// const indexOfLastTodo = currentPage * postperPage;
//         const indexOfFirstTodo = indexOfLastTodo - postperPage;
//         const currentQuestions =questions.slice(indexOfFirstTodo, indexOfLastTodo);
        
const paginate=(number)=>{
    dispatch(paginationActions.changeNumber(number));
};

 useEffect(()=>{
     
       
    dispatch(fetchQuestions(url));


 } ,[dispatch ,url])

console.log(trunc);
console.log(currentPage);
       if(loader.status ==="pending"){
           return  <Loader/>
       }

       if(loader.status === "failed"){
           return <div className="error">
              No network connection!
           </div>
       }
     
    return (
     <Fragment>
    <div style={{position:"relative" , }}>
    {trunc.map((_ , i)=>{
         return <QuizComp key={i} questions={questions.slice(i*postperPage , postperPage*(++i))} classValue ={(i===currentPage)?"active-slide":""}  />
     })}
    </div>
         {/* <QuizComp questions={questions}/> */}
     <Pagination totalQuestions={questions.length} checked="true" postperPage={postperPage} paginate={paginate} /> 
    {currentPage === trunc.length && <Submit/>}
  {showModal &&   <ShowScore url={url}  score={score} length={questions.length}/>}
     </Fragment>   
        
    
      );
}

export default Quiz ;