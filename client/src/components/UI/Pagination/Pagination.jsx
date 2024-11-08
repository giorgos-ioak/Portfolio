import { useState } from 'react';
import classes from './Pagination.module.css';

function Pagination({ totalItems, itemsPerPage, pageClick }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function handleClick(currentPage, index){
    pageClick(currentPage);
    setCurrentPageIndex(index);
  };
    

  let pages = [];

  for(let i=1; i<Math.ceil(totalItems / itemsPerPage) + 1; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.container}>
      {pages.map((page, index) => (
        <button 
          onClick={() => handleClick(page, index)}
          className={index === currentPageIndex ? classes.btnSelected : classes.btn} 
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination