
import {uiActions} from './ui'
import  {quizActions} from './QuizSlice'
 export const fetchQuestions =  (url)=>{
console.log(url);
    return async dispatch=>{
             
        dispatch(uiActions.showLoader({
            status:"pending",
            message:" "
        }))
    const sendRequest= async()=>{
    
        const res =  await fetch(url);
             
        if(!res.ok){
            throw new Error("failed to load");
        }

      const  data =  await res.json();

        return data.results;
    }

         
    try{

       const questionData=  await sendRequest();
       
        
       questionData.forEach(question=>{
           question.incorrect_answers.push(question.correct_answer);
       })
       
       const resolvedQuestions =  questionData.map(((question,index)=>{
           return{
               question:atob(question.question),
               category:atob(question.category),
               correct_answer:atob(question.correct_answer),
               incorrect_answers:question.incorrect_answers.map(i=>atob(i)),
               difficulty:atob(question.difficulty),
               type:atob(question.type),
               id:++index
           }
       }));
    
       dispatch(quizActions.setQuestions(resolvedQuestions))
              dispatch(quizActions.fillTrucn());
       dispatch(uiActions.showLoader({
           status:"successful",
           message:''
       }))
    }catch(err){

        dispatch(uiActions.showLoader({
            status:"failed",
            message:err.message
        }))
    }

    }
}; 