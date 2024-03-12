import 'bootstrap/dist/css/bootstrap.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from "./Signup.module.css";
import { Link } from 'react-router-dom';
export default function Signup (){
    return(
        <div className={styles.Container}>
        <div className={styles.innerContainer}>
            <div className={styles.headerContainer}>
                <p>Welcome</p>
                <p>Enter Your Details to register with us.</p>
            </div>
            <div>
                <form>
                <div className={styles.imageContainer}>
                <img src="././logo192.png" alt="Company Logo"/>
                </div>
                <div className={styles.inputFields}>
                <input className={styles.useridField} type="text" placeholder='Enter Sponser Id' required/>
                <input className={styles.useridField} type="text" placeholder='Enter Your Name' required/>
                <input className={styles.useridField} type="email" placeholder='Enter Your Email' required/>
                <input className={styles.useridField} type="number" placeholder='Enter Your Number' required/>
                <input className={styles.passwordField} type='password' placeholder='Enter your Password' required/>
                <button className={styles.submitButton} type='submit'>Register</button>
                </div>
                </form>
            <div className={styles.linkContainer}>
                <Link className={styles.linkStyle} to="/">Already have Account</Link>
            </div>
            <div className={styles.otherOptionContain}>
                <div>
                    <p style={{color:"white"}}>or sign up with</p> 
                </div>
                <div>
                <a href="#"><TwitterIcon style={{ color: 'blue' }} /></a>
                <a href="#"><EmailIcon style={{ color: 'red' }} /></a>
                <a href="#"><FacebookIcon style={{ color: 'blue' }} /></a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}