
import Multiple from './Multiple'
import Main from '../main/Main'
function QuizComp({questions}) {
console.log(questions);
    return (
        <Main>
            
        {questions.map((question, index)=>{
           
           return <Multiple key={index} question={question} index={index}/>
        })}

        </Main>
    );
}

export default QuizComp;