import styles from './Home.module.css'
import { CiCircleChevDown } from "react-icons/ci";

import IlustrationImage from '/img/img_main2.jpg'

const Home = () => {
    return(
        <>
            <div className={styles.home}>
                <div className={styles.info_area}>
                    <h2>Bem vindo ao meu portfólio</h2>
                    <h1>Olá! Eu Sou Breno, Web Developer</h1>
                    <p>Estou entusiasmado para compartilhar meu portfólio com você e discutir como posso contribuir para os seus projetos. Se você está procurando um desenvolvedor web que combina habilidades técnicas sólidas com uma atitude comprometida e uma paixão pelo desenvolvimento web, estou aqui para ajudar. Vamos criar experiências incríveis juntos!
                    </p>
                </div>
                <img src={IlustrationImage} alt="" />
            </div>
            <div className={styles.down_indicate}>
                <span><CiCircleChevDown/></span>
            </div>
        </>
    )
}

export default Home