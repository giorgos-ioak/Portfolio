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
        sx={{
          '& .MuiPaginationItem-root': {
            backgroundColor: '#f5f5f5', 
            color: 'black',
            '&:hover': {
              backgroundColor: '#333333',
              color: 'white',
              transition: '0.3s ease-out'
            }
          },
          '& .Mui-selected': {
            backgroundColor: 'black',
            color: 'white'
          }
        }}
        count={totalPages} 
        page={currentPage} 
        onChange={handlePageChange}
        siblingCount={smallScreen ? 0 : 1} 
        boundaryCount={smallScreen ? 1 : 2}
      />
    </Stack>
  );
}

export default MyPagination;