import RecentLogin from './RecentLogin';

import classes from './LoginPage.module.css';
const LoginPage =()=>{
    return(
        <>
            <div className={`container ${classes.layout}`}>
                <div className={`row align-items-center ${classes.app}`}>
                    <section className={`col align-self-center`}>
                    <RecentLogin/>
                    </section>
                    <section className='col align-self-center'>
                    log in form
                    </section>
                </div>
            </div>
        </>
    );
};

export default LoginPage;