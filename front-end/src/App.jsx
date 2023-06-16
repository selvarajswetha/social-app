import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from "./components/Layout";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>

  </BrowserRouter>

}

export default App;
