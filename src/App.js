import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import FormularioLogin from './FormularioLogin/FormularioLogin';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  return (
    <div className="App">
      <FormularioLogin firstName={firstName} 
                       lastName={lastName} 
                       email={email}
                       password={password}
                       confirmPassword={confirmPassword}
                       setFirstName={setFirstName}
                       setLastName={setLastName}
                       setEmail={setEmail}
                       setPassword={setPassword}
                       setConfirmPassword={setConfirmPassword}/>
      <h2>Your Form Data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
}

export default App;
