import logo from './logo.svg';
import './App.css';
import bear from "./components/images/Brown-bear.jpg"
import Navbar from './components/Navbar';
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
     <div className="container">
       <Navbar/>
        <Main/>
     </div>

    </div>
  );
}

export default App;
