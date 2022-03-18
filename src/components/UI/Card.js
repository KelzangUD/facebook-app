import AddImage from '../../assets/add.png';

const Card = (props)=>{
    const imgPresent=
    <div className="card">
    <a href={props.href} title={props.title}></a>
    <img src={props.src} className="card-img-top" alt={props.title} />
    <div className="card-body">
    <p className="card-text">{props.name}</p>
    </div>
    </div>;

    const imgNotPresent=
    <div className='card'>
    <a href={props.href} title={props.title}></a>
    </div>;
    

    return(
        <>    
            {
                props.imgUrl===""? imgNotPresent:imgPresent
            }      
        </>
    );
};

export default Card;