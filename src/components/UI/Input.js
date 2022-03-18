import classes from './Input.module.css';

const Input =(props)=>{
    return(
        <>
        <input placeholder={props.placeholder} type={props.type}/>
        </>
    );
};

export default Input;