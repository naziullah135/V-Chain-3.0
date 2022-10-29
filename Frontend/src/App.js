import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVehicles from './components/AddVehicles';
import SideNav from './components/SideNav';
import Users from './components/Users';
import Home from './pages/Home';
import Login from './pages/Login';
import { theme } from './theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav />} >
            <Route index element={<Home />} />
            <Route path="add-vehicles" element={<AddVehicles />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
