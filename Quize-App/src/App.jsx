import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';

function App() {

  return (<>
    <Navbar></Navbar>
    {/* <ImageWithBorder></ImageWithBorder> */}
    <Outlet></Outlet>
    </>
  )
}
export default App;
