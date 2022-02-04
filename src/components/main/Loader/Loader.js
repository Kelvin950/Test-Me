import LoaderSvg from './LoaderSvg';
import classes from './Loader.module.css'
function Loader() {
    return (  
        <div className={classes.loader}>
       <LoaderSvg/>
        </div>
    );
}

export default Loader;