import Modal from './Modal';
import ModalButton from './ModalButton'
function ShowScore(props) {
    return (  
<Modal>
   <p style={{color:"black"}}>
    Score: {props.score} out of  {props.length}  
   </p>
     <ModalButton  url={props.url}/>
</Modal>
    );
}

export default ShowScore;