import classes from './Button.module.css';
const Button = (props) =>{
    let style;
    if(props.label==='Log in'){
        style = {
            backgroundColor: "#1877f2",
            fontSize: "20px",
            width: "364px"
        }
    }
    else {
        style = {
            backgroundColor: "#42b72a",
            fontSize: "17px",

        }
    }
    return (
        <>
            <button style={style}>{props.label}</button>
        </>
    )
};

export default Button;