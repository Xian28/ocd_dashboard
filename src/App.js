import './App.css';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { RootCss } from './rootCss/RootCss';

function App() {
  return (
    <>
      <Box sx={{
        // background: 'white'
        background: `${RootCss.colors.neutralBackground}`,
        minHeight: '100vh'
      }}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
