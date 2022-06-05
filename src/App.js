import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Pages/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Chats from './Pages/Chats';
import Rooms from './Pages/Rooms';
import CreateRoom from './Pages/CreateRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invite" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/room" element={<Rooms />} />
        <Route path="/create" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
