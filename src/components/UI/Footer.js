import classes from './Footer.module.css';
import languageData from '../../data/footerdata/Language.json';
import additonalData from '../../data/footerdata/additional.json';

const Footer = () =>{
    let theLangData = languageData;
    let additional = additonalData;
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.pageFooter}>
                    <ul>
                        <li>English (UK)</li>
                        {theLangData.map(language => (
                                (<li key={language.title}><a href={`https://${language.href}.facebook.com/`}  title={language.title}>{language.language}</a></li>)
                        ))}
                        <li><a role="button"  href="#" title="Show more languages"><i id="iconFooter" className="bi bi-plus-square-fill"></i></a></li>
                    </ul>
                </div>
                <hr/>
                <div className={classes.pageFooter}>
                    <ul>
                        {
                            additional.map(add=>(
                            <li key={add.href}><a href={add.href} title={add.title}>{add.name}</a></li>))
                        }
                    </ul>
                </div>
                <div>
                    <div>
                        <span> Meta © 2022</span>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Footer;