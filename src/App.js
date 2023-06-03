import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import Form from "./components/Form";
import React, { useState } from 'react';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes

} from "react-router-dom"


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

      setAlert(null)

    }, 2000);
  }


  const [mode, setMode] = useState('light');

  const [btText, setBtText] = useState('Enable Dark Mode');


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')

      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable ", "success")
      setBtText('Enable Light Mode')
    }
    else {
      setMode('light')

      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable ", "success")
      setBtText('Enable Dark Mode')
    }
  }

  return (
    <Router>
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btText={btText} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <TextForm mode={mode} showAlert={showAlert} />




        </div>
      </>
    </Router>
  );
}

export default App;
