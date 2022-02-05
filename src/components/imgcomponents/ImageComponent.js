import classes from '../Home.module.css';
import {useHistory , useLocation} from 'react-router-dom'
function ImageComponents(props) {
const history  = useHistory();
    function onClickHandler (){
         history.push({
             pathname:`/quiz`,
             search:`?type=${props.name}${props.dataCategory}`
         })

    }
    return (  
        <figure>
        <img src={props.srcName} onClick={onClickHandler} className={classes.img} data-category={props.dataCategory} data-src="0" alt="sport"/> 
       <figcaption className={classes.figcaption}>{props.name}</figcaption>
       </figure>
    );
}

export default ImageComponents;