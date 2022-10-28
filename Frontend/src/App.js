import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';

import Home from './pages/home/Home'

function App() {
  return (
    <div className="home">
      <div className="main-container">
        {/* <div className="sidebar-dummy"></div> */}
        <div className="sidebar" >
          <Link className="logo" to='/'>
            <img src={logo} width="140px" alt="" />
          </Link>
          <div className="profile">
            profile
          </div>
        </div>

        <main id='container' className="main"  >
          <Home />
        </main>

        <div className="links">
          <div className="nav">
            <div className='nav--item menu active' ><span>Users</span></div>
            <div className="nav--item menu" >Vehicles</div>
            <div className="nav--item menu" >Contracts</div>
            <div className="nav--item menu" >--------------</div>
            <div className="nav--item menu" >Brands</div>
            <div className="nav--item menu" >Models</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
