import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem'
      }}
    >
      <CircularProgress />
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{ 
          textAlign: 'center',
          fontFamily: 'Montserrat',
          fontWeight: '500'
        }}
      >
        Loading..
      </Typography>
    </Box>
  );
}