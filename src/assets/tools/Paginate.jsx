import { useState } from "react";


const Paginate = (data=[]) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
   // Calculate the index range for the current page
   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
   
   // Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

   const buttons = Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
    <button key={index} onClick={() => paginate(index + 1)} className={`join-item btn btn-sm ${currentPage === index + 1 && "btn-active"}`}>
      {index + 1}
    </button>
  ))
        return {currentItems,buttons}
};

export default Paginate;