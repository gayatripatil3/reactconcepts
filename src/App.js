import logo from './logo.svg';
import './App.css';
import Form1 from './components/Form1'
import Child1 from './components/Child1';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import ChangeColor from './components/ChangeColor';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


function App() {
  const [arr, setItems] = useState([]);
  const [modeName, changeFlag] = useState('black');
  const [modeName1, changeFlag1] = useState({ color: 'light' });
  const [alert1, setAlert] = useState({ msg: 'Page Loaded Successfully', type: 'warning' });
  const [color1, changeCol] = useState("white");


  const toggleFun = () => {
    if (modeName == 'dark') {
      console.log("fiest");
      changeFlag('light')
      changeFlag1({ color: 'black' });
      setAlert({ msg: 'In Regular Mode', type: 'primary' })
    }
    else {
      console.log("second");
      changeFlag('dark')
      changeFlag1({ color: 'white' });
      setAlert({ msg: 'In Dark Mode', type: 'success' })
      setTimeout(() => {
        setAlert({})
      }, 5000)
    }
  }

  const changeColorFun = (col) => {
    console.log(col);
    changeCol(col);
  }

  const updateItem = (newItems) => {
    setItems(newItems);
  };

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div>
      {/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router> */}

      {/* <Child1 item={arr}  updateFun={updateItem}/> */}
      <Alert alert={alert1} toggleFun1={toggleFun}/>
      <Navbar mode={modeName} mode2={modeName1}  toggleFun1={toggleFun}  />
      <p>Enter text</p>
      
      <Form1/>
      <About/>
      <ChangeColor color1={color1} changeCol1={changeColorFun}/>
    </div>
  );
}

export default App;
