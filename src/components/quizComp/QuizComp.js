
import Multiple from './Multiple'

import classes from './QuizComp.module.css'
function QuizComp({questions ,classValue}) {
console.log(questions);
console.log(classValue);
const className = [classes['slides'],classes[classValue]].join('') ;
    return (
        <div className={className}>
            
        {questions.map((question, index)=>{
           
           return <Multiple key={index} question={question} index={index}/>
        })}

        </div>
    );
}

export default QuizComp;