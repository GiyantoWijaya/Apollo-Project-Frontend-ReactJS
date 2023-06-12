import { BrowserRouter, Route, Outlet, Routes, Navigate } from 'react-router-dom';
import Index from './pages/index.page';
import Game from './pages/game.page';
import WrongURL from './pages/wrongUrl.page';
import GameDetail from './components/gameDetail/gameDetail.components';
import LoginPage from './components/authentication/loginPage.component';
import Register from './pages/register.page';
import Profile from './pages/profile.page';

import Cookies from 'js-cookie';

// import GamePlay from './pages/gamePlay.page';
import Home from './pages/home.page';
import GameList from './pages/gameList.page';

import Layout from './layout/layout.page';

function App() {
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get('token') !== undefined) {
      return <Navigate to="/home" />;
    } else {
      // return <Route {...props} />;
      return <Outlet />;
    }
  };

  const PageRoute = () => {
    if (Cookies.get('userId') === undefined) {
      return <Navigate to="/login" />;
    } else if (Cookies.get('userId') !== undefined) {
      // return <Route {...props} />;
      return <Outlet />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Index />} />

        <Route element={<PageRoute />}>
          <Route exact path="/game/:idgame" element={<Game />} />
          <Route element={<Layout />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/gamedetail" element={<GameDetail />} />
            <Route exact path="/gamelist" element={<GameList />} />
          </Route>
        </Route>

        <Route element={<LoginRoute />}>
          <Route element={<Layout />}>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Route>
        </Route>

        {/* wrongURL urutan router harus di taruh paling bawah */}
        <Route exact path="*" element={<WrongURL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
