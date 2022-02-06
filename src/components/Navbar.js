import { NavLink } from "react-router-dom"
import classes from './Navbar.module.css'
import {uiActions} from '../store/ui'
import {useSelector , useDispatch} from  'react-redux'

const Navbar  = ()=>{

  const clicked =  useSelector(state=>state.ui.clicked);
  const  dispatch = useDispatch();
  function onClickHandler(){
    dispatch(uiActions.clik())
    console.log(clicked);
  }

  const changeClass = ((clicked)?[classes['links'],classes["show-links"]].join(''):classes["links"]);
    return  <nav className={classes.nav}>
    <div className= {classes["nav-center"]}>
  
      <div className={classes["nav-header"]}>
    
        <h1 className="logo"><i class="fas fa-brain"></i>TEST ME</h1>
        <button className={classes["nav-toggle"]} onClick={onClickHandler}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
   
      <ul className={changeClass}>
        <li>
        <NavLink to="/home" activeClassName={classes['active']} >
                Home
        </NavLink>
        </li>
     
      <NavLink to="/settings" activeClassName={classes['active']}>
               Settings
      </NavLink>
        <li>
        
        </li>
      </ul>
     
    </div>
  </nav>
}


export default  Navbar;