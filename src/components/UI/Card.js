import classes from './Card.module.css';

import AddImage from '../../assets/add.png';

const Card = (props)=>{
    let name = props.name;
    if(props.name===''){
        name='Add Account';
    }
    const black = "#4b4f56";
    const blue = "#1877f2";
    let image = props.src;
    if(props.src===''){
        image = AddImage;
    }
    return(
        <>    
            <div className={`card ${classes.profileCard}`}>
                <a href={props.href} title={props.title} className={classes.link}></a>
                <div className={classes.imgHolderDiv}>
                <img src={image} className={`card-img-top ${classes.image}`} alt={props.title} style={{width: props.src===''? '42px':'160px'}}/>  
                </div>
                <div className="card-body">
                <p className={`card-text ${classes.text}`} style={{color: name==="Add Account" ? blue: black}}>{name}</p>
                </div>
            </div>    
        </>
    );
};

export default Card;