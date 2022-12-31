
function CustomPagination(props){
    const {currentPage,setCurrentPage,totalPages}={...props}
    const pages=[...Array(totalPages+1).keys()].slice(1);
    function prevPage(){
        if(currentPage!==1){
            setCurrentPage(currentPage-1);
        }
    }
    function nextPage(){
        if(currentPage!==totalPages){
            setCurrentPage(currentPage+1);
        }
    }
    return(

        <div>
            <h1>CustomPagination</h1>
            <button onClick={()=>{prevPage()}} className="btn btn-primary">Previous</button>
            {
                pages.map((item)=>{
                    return(
                        <div style={{"display":"inline-flex"}}>
                            <li style={{"listStyle":"none","width":"50px","height":"50px","border":"2px solid black","cursor":"pointer"}} onClick={()=>{setCurrentPage(item)}}>{item}</li>
                        </div>
                    )
                })
            }
            <button onClick={()=>{nextPage()}} className="btn btn-primary">Next</button>
        </div>
    )
}

export default CustomPagination;