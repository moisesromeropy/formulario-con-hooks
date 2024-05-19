import React, {useState} from 'react';
import styles from './FormularioLogin.module.css';

const FormularioLogin = (props) => {
    const {firstName, lastName, email, password, confirmPassword, setConfirmPassword, setEmail, setFirstName, setLastName, setPassword} = props;
    const [botonActivo, setBotonActivo] = useState(false);
    let contadorError = 0;
    const createUser = (e) => {
        e.preventDefault();
        props.setNewUser({firstName, lastName, email, password, confirmPassword});
        setFirstName("");
        setLastName("")
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    
    return(
        <div>
            <form onSubmit={createUser} id={styles.formulario}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="firstName" name="firstName" id="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value)}required/>
                <p>{
                firstName.length<2 && firstName.length > 0? (contadorError+=1, "First Name must be at least 2 characters")  : 
                    ("")
                    }
                </p>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={lastName} onChange={ (e) => setLastName(e.target.value)} required/>
                <p>{
                lastName.length<2 && lastName.length > 0? (contadorError+=1, "Last Name must be at least 2 characters")  : 
                    ("")
                    }
                </p>
                <label htmlFor="Email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)}required/>
                <p>{
                email.length<5 && email.length > 0? (contadorError+=1, "Email must be at least 5 characters")  : 
                    ""
                    }
                </p>
                <label htmlFor="Password">Password</label>
                <input type="text" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} required/>
                <p>{
                password.length<8 && password.length > 0? (contadorError+=1, "Password must be at least 8 characters")  : 
                    ""
                    }
                </p>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>
                <p>{
                password !== confirmPassword ? (contadorError+=1, "Password must match")  : 
                    ""
                    }
                </p>
                <input type="submit" value="Login" disabled={contadorError> 0 ? true: false} />
            </form>
           {console.log(contadorError)}
        </div>
    )

}

export default FormularioLogin;