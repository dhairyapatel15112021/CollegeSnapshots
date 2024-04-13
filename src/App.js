import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <div className='line'></div> */}
      <Outlet/>
      {/* <div className='line'></div> */}
      <Footer/>
    </div>
  );
}

export default App;
