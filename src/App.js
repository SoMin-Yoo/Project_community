import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Tving from "./pages/Tving";
import Disneyplus from "./pages/Disneyplus";
import Write from "./community/Write";
import Auth from "./Auth";
import UserDetail from "./pages/users/[id]";

function Router() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/netflix" element={<Netflix/>} />
          <Route path="/tving" element={<Tving />} />
          <Route path="/disneyplus" element={<Disneyplus />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
