import styles from './About.module.css'

import PersonImg from '/img/altered_person_about.png'

const About = () => {
    return(
        <div className={styles.about} id="about">
            <div className={styles.about_container}>
                <div className={styles.description_area}>
                    <h1>Sobre mim!</h1>
                    <p>Sou um desenvolvedor front-end com 2 anos de experiência. Tenho conhecimento em API e em React. Minha paixão pelo ecossistema JavaScript me impulsiona a continuar aprimorando minhas habilidades e explorando novas tecnologias. Meu portfólio demonstra meu comprometimento em criar interfaces atraentes e funcionais, além de integrar APIs de forma eficiente. Estou animado para seguir minha carreira nessa área e contribuir para projetos web desafiadores.</p>
                </div>
                <img src={PersonImg} alt="" />
            </div>
        </div>
    )
}

export default About