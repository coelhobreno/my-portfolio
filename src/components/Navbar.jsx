import styles from './Navbar.module.css'

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsClipboardCheckFill } from "react-icons/bs";


const Navbar = () => {
    return(
        
        <nav>
            <h1><BsClipboardCheckFill/></h1>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#certificates">Certificados</a></li>
                <li className={styles.social_icons}>
                    <a href="https://github.com/coelhobreno"><FaGithub/></a>
                </li>
                <li className={styles.social_icons}>
                    <a href="https://www.linkedin.com/in/coelhobreno/">< FaLinkedinIn/></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar