import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import logo from "../../assets/images/logo.webp"
import LinksSelect from "./LinksSelect/LinksSelect";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerInner}>
                <Link 
                    className={styles.logoWrap}
                    to='/'
                >
                    <img className={styles.logo} src={logo} alt="logo" />
                    <h1 className={styles.logoHeader}>대전시립예술단</h1>
                </Link>
                <div className={styles.footerTextWrap}>
                    <div className={styles.policyWrap}>
                        <Link to="/">개인정보취급방침</Link>
                        <Link to="/">이메일무단수집거부</Link>
                        <Link to="/">이용약관</Link>
                    </div>
                    <div className={styles.detailsWrap}>
                        <span>(35204) 대전광역시 서구 둔산대로 135 대전예술의전당</span>
                        <span>042-270-8328</span>
                        <span>copyright 2025 All right reserved.</span>
                    </div>
                </div>
                <div>
                    <LinksSelect />
                    <div className={styles.socials}>
                        <Link to='/'>
                            <FaInstagram className={styles.social} />
                        </Link>
                        <Link to='/'>
                            <FaFacebook className={styles.social}/>
                        </Link>
                        <Link to='/'>
                            <FaBlogger className={styles.social}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;