import './App.css'
import RegisterForm from './components/RegisterForm'
import RegisterForm_2 from './components/RegisterForm_2'
import RegisterForm_MUI from './components/RegisterForm_MUI'
import { Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  return (
    <Box>
      <CssBaseline/>
      <RegisterForm_MUI/>
    </Box>
  )
}

export default App
