import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVehicles from './components/AddVehicles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SideNav from './components/SideNav';
import Users from './components/Users';
import Vehicles from './components/Vehicles';
import { theme } from './theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav />} >
            <Route index element={<Dashboard />} />
            <Route path="add-vehicles" element={<AddVehicles />} />
            <Route path="users" element={<Users />} />
            <Route path="vehicles" element={<Vehicles />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
