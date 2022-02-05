
import  QuizComp from '../components/quizComp/QuizComp';
import {useLocation} from 'react-router-dom';
import {Fragment, useEffect}  from 'react';
import {useSelector , useDispatch} from 'react-redux';
import Loader from '../components/main/Loader/Loader'
import  {fetchQuestions} from '../store/quizActions';
import Pagination from '../components/Pagination';
import {paginationActions}  from '../store/pagination'
 const Quiz =  ()=> {

    const location =  useLocation();
console.log(location.search);
const category=(location.search.slice(location.search.length-2 ,location.search.length));
const amount =  useSelector(state => state.quiz.amount);
const difficulty =  useSelector(state=>state.quiz.difficulty);
const loader=  useSelector(state =>state.ui.loader);
const  questions =  useSelector(state=>state.quiz.questions);
const currentPage =  useSelector(state=>state.pagination.currentPage)
const postperPage =  useSelector(state=>state.pagination.questionsPerPage)
const dispatch =  useDispatch();
const url =  `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&encode=base64`;
console.log(loader);
const indexOfLastTodo = currentPage * postperPage;
        const indexOfFirstTodo = indexOfLastTodo - postperPage;
        const currentQuestions =questions.slice(indexOfFirstTodo, indexOfLastTodo);

const paginate=(number)=>{
    dispatch(paginationActions.changeNumber(number));
};

 useEffect(()=>{
     
       
    dispatch(fetchQuestions(url));
          
    
    

 } ,[dispatch ,url])


       if(loader.status ==="pending"){
           return  <Loader/>
       }

       if(loader.status === "failed"){
           return <div style={{color:'white'}}>
               failed
           </div>
       }
    return (
     <Fragment>
         <QuizComp questions={currentQuestions}/>
     <Pagination totalQuestions={questions.length} postperPage={postperPage} paginate={paginate} /> 
     </Fragment>   
        
    
      );
}

export default Quiz ;