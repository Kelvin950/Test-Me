
import  Possible from './Possible'
import classes from './QuizComp.module.css';
function Multiple({question ,index}) {
    return ( 
           
 
         <div className={classes.questions} >
            {question.id + 1}. {question.question}
       
         <div className={classes.answer}>
             {question.incorrect_answers.map((q , i)=>{
                 return <Possible key={i} name={question.id} answer ={question.correct_answer} value={q}   />
             })}
         </div>
         </div>
 
    

     );
}

export default Multiple;