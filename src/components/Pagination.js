const pageNumbers = [];


function Pagination({totalQuestions ,postperPage ,paginate}) {
        
    for(let i=1;i<=Math.ceil(totalQuestions/postperPage);i++){
        pageNumbers.push(i);
    };
    return (  
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number=>{
                        return <li key={number}  className="page-item">
                            <a  href="!#" onClick={(e)=>{
                                e.preventDefault();
                                    paginate(number)
                            }} className="page-link">
                                {number}
                            </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Pagination;