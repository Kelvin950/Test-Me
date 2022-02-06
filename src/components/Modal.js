import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

function BackDrop() {
    return ( <div className={classes.backdrop}>

    </div> );
}

function Overlay(props){

    return <div className={classes.modal}>
        {props.children}
    </div>
}


function Modal(props) {
    return (  
     <Fragment>
         {ReactDOM.createPortal(<BackDrop /> , document.getElementById("backdrop"))}
         {ReactDOM.createPortal(<Overlay>
             {props.children}
         </Overlay>, document.getElementById("modal"))}
     </Fragment>      
     );
}

export default Modal;
