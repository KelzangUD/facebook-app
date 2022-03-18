import classes from './RecentLogin.module.css';
import Card from '../UI/Card';

const RecentLogin =()=>{
    const href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ3NTA0ODIzLCJjYWxsc2l0ZV9pZCI6MzQzNjE1NzkwMjAxNjQ0fQ%3D%3D&cuid=AYiYHltKLEWmjuz3-0ePfamhK93oi8KCFU1Png0Wc9_-Xma2O_7hAMB-2AiCLyJjABaYPEDTC5nCmIt0mGj4y3mplUHAEoHUNIWsXwgsgvdzvuyGRScUP6P5NHPtZF0N2ZVvxnHQH0LxFUmQ4AmKJO7a&next";
    const title = 'Kelzang Ugyen Dorji';
    const url='https://scontent.fpbh1-1.fna.fbcdn.net/v/t1.18169-1/1888712_409585492528818_1955178464795203954_n.jpg?stp=c40.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BqvqDfc1U8MAX_hTX2T&_nc_ht=scontent.fpbh1-1.fna&oh=00_AT_yWcPH6N4unOGY3LbzUbxMz4ciVJZvov5nZu90A3a0LA&oe=6257A2F0';
    
    return(
        <>
        <div className={classes['img-content']}>
            <img className={classes.fbimg} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook_image"/> 
        </div>
        <div className={classes.recentLogin}><h3>Recent logins</h3></div>
        <div className={classes.comment}><p>Click your picture or add an account</p></div>
        <div className='row'>
            <div className={`col ${classes.header}`}>
                <Card href={href} title={title} src={url} name='Kelzang Ugyen'/>
            </div>
            <div className={`col ${classes.header}`}>
                <Card href={href}  src='' name=''/>
            </div>
        </div>
        </>
    );
};

export default RecentLogin;