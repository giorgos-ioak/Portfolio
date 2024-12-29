import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function MyPagination({ totalItems, itemsPerPage, pageClick, smallScreen }) {
  const [currentPage, setCurrentPage] = useState(1); // MUI Pagination is 1-based index

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the current page
    pageClick(value); // Trigger the callback with the new page
  };

  return (
    <Stack 
      spacing={2} 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 3, 
      }}
    >
      <Pagination 
        count={totalPages} 
        page={currentPage} 
        onChange={handlePageChange} 
        shape="rounded" 
        siblingCount={smallScreen ? 0 : 1} 
        boundaryCount={smallScreen ? 1 : 2}
      />
    </Stack>
  );
}

export default MyPagination;