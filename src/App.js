import React, {useState} from 'react';
import './App.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {

  const [current_form , setcurrent_form] = useState('login')

  const toggleForm = (formName) =>{
    setcurrent_form(formName)
  }
  return (
    <div className="App">
      {
     current_form === 'login' ? <Login onFormSwitch = {toggleForm} /> : <Register onFormSwitch = {toggleForm}/>
      }
    </div>
  );
}

export default App;
