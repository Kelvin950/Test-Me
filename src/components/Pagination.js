import {useSelector , useDispatch} from 'react-redux';
import {paginationActions} from '../store/pagination'

function Pagination() {
    const currentPage =  useSelector(state=>state.pagination.currentPage); 
    const trunc = useSelector(state=>state.quiz.trunc);
    const dispatch =  useDispatch();
   function showPrevSlideHandler(e){
              e.preventDefault();
              dispatch(paginationActions.showPrevSlide());
    }

   function showNextSlideHandler(e){
        e.preventDefault();
        dispatch(paginationActions.showNextSlide());
}

    return (  
        <nav className="middle">
            <ul className="pagination">
                
            {
                currentPage >1 &&   <li className="page-item">
                            <a  href="!#"  onClick={showPrevSlideHandler} className="page-link">
                            Prev
                            </a>
                        </li>
            }
                     {
                         (currentPage >0 && currentPage !== trunc.length) &&    <li className="page-item">
                            <a  href="!#"  onClick={showNextSlideHandler} className="page-link">
                                Next
                            </a>
                        </li>
                     }
                
            </ul>
        </nav>
    );
}

export default Pagination;