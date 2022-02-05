import { Fragment } from 'react';
import  Possible from './Possible'
import classes from './QuizComp.module.css';
function Multiple({question ,index}) {
    return ( 
           
     <Fragment>
         <div className={classes.questions} >
            {++index}. {question.question}
         </div>
         <div className={classes.answer}>
             {question.incorrect_answers.map((q , i)=>{
                 return <Possible key={i} name={index} value={q}   />
             })}
         </div>
     </Fragment>
    

     );
}

export default Multiple;