import classes from './LoginForm.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';

const LoginForm = ()=>{
    return (
        <>
        <div className={classes.form}>
            <div className={classes.input}>
                <Input placeholder="Email address or phone number" type="text"/>
                <Input placeholder="Password" type="password"/>
            </div>
            <div className={classes.input}>
                <Button label="Log in"/>
            </div>
            <div className={classes.input}>
                <a className={classes.forgotPasswordLink}>Forgotten password?</a>
            </div>
            <hr></hr>
            <div className={classes.input}>
                <Button label="Create New Account"/>
            </div>
        </div>
        <div>
            <p className={classes.text}><b><a className={classes.createAccount} href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a></b> for a celebrity, brand or business.</p>
        </div>
        </>
    );
}

export default LoginForm;