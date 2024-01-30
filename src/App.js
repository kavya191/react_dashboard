
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Upload from './Pages/Upload/Upload';
function App() {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/upload' element={<Upload/>}/>
   </Routes>
  );
}

export default App;
