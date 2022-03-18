import AddImage from '../../assets/add.png';
import classes from './RecentLogin.module.css';
import Card from '../UI/Card';

const RecentLogin =()=>{
    const href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ3NTA0ODIzLCJjYWxsc2l0ZV9pZCI6MzQzNjE1NzkwMjAxNjQ0fQ%3D%3D&cuid=AYiYHltKLEWmjuz3-0ePfamhK93oi8KCFU1Png0Wc9_-Xma2O_7hAMB-2AiCLyJjABaYPEDTC5nCmIt0mGj4y3mplUHAEoHUNIWsXwgsgvdzvuyGRScUP6P5NHPtZF0N2ZVvxnHQH0LxFUmQ4AmKJO7a&next";
    const title = 'Kelzang Ugyen Dorji';
    const imgUrl='https://scontent.fpbh1-1.fna.fbcdn.net/v/t1.18169-1/1888712_409585492528818_1955178464795203954_n.jpg?stp=c40.0.160.160a_dst-jpg_p160x160&_nc_cat=105&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=BqvqDfc1U8MAX_hTX2T&_nc_ht=scontent.fpbh1-1.fna&oh=00_AT_yWcPH6N4unOGY3LbzUbxMz4ciVJZvov5nZu90A3a0LA&oe=6257A2F0';
    
    const img=(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
  </svg>);
    return(
        <>
        <div className={classes['img-content']}>
            <img className={classes.fbimg} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook image"/> 
        </div>
        <div className={classes.recentLogin}><h3>Recent logins</h3></div>
        <div className={classes.comment}><p>Click your picture or add an account</p></div>
        <div className='row'>
            <div className={`col ${classes.header}`}>
                <Card href={href} title={title} src={imgUrl} name='Kelzang Ugyen'/>
            </div>
            <div className={`col ${classes.header}`}>
                <Card href={href}  title={title} src="" name="Add account"/>
            </div>
        </div>
        </>
    );
};

export default RecentLogin;