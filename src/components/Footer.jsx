import styles from './Footer.module.css'

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
    return(
        <footer className={styles.footer}>
            <h1>&copy; Portfólio de Breno Coelho</h1>
            <p>Transformando visões em realidade, uma criação de cada vez. Meu portfólio é a expressão do meu compromisso com a excelência e a criatividade.</p>
            <ul>
                <li className={styles.social_icons}>
                    <a href="https://github.com/coelhobreno"><FaGithub/></a>
                </li>
                <li className={styles.social_icons}>
                    <a href="https://www.linkedin.com/in/coelhobreno/">< FaLinkedinIn/></a>
                </li>
                <li className={styles.social_icons}>
                    <a href="mailto:coelhobreno21@gmail.com">< FiMail/></a>
                </li>
            </ul>
        </footer>
    )
}

export default Navbar