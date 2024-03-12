import 'bootstrap/dist/css/bootstrap.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from "./Forgot.module.css";
import { Link } from 'react-router-dom';
export default function Forgot (){
    return(
        <div className={styles.Container}>
        <div className={styles.innerContainer}>
            <div className={styles.headerContainer}>
                <p>Welcome Back!</p>
                <p>Enter Your Details Go to dashboard.</p>
            </div>
            <div>
                <form>
                <div className={styles.imageContainer}>
                <img src="././logo192.png" alt="Company Logo"/>
                </div>
                <div className={styles.inputFields}>
                <input className={styles.useridField} type="text" placeholder='Enter your UserId' required/>
                <button className={styles.submitButton} type='submit'>Forget Password</button>
                </div>
                </form>
            <div className={styles.linkContainer}>
                <Link className={styles.linkStyle} to='/'>Already have account?</Link>
                <Link className={styles.linkStyle} to='/register'>Create New Account</Link>
            </div>
            <div className={styles.otherOptionContain}>
                <div>
                    <p style={{color:"white"}}>or sign in with</p> 
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