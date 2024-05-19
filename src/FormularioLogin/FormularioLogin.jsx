import React, {useState} from 'react';
import styles from './FormularioLogin.module.css';

const FormularioLogin = (props) => {
    const {firstName, lastName, email, password, confirmPassword, setConfirmPassword, setEmail, setFirstName, setLastName, setPassword} = props;
    return(
        <div>
            <form id={styles.formulario}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="firstName" name="firstName" id="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                <label htmlFor="Password">Password</label>
                <input type="text" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </form>
        </div>
    )

}

export default FormularioLogin;