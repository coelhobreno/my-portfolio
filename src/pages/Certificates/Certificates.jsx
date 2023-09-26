import styles from './Certificates.module.css'

import { BiLink } from "react-icons/bi";

const Certificates = () => {
    return(
        <div className={styles.certificates} id="certificates">
            <h1>Certificados</h1>
            <div className={styles.container_cert}>

                <div className={styles.overflow_cont}>
                    <div className={styles.wrap_cert}>

                        <div className={styles.no_back_one}></div>

                        <div className={styles.info_cert}>
                            <h3>React do Zero a Maestria</h3>
                            <p>Competências:</p>
                            <ul>
                                <li>React (React Router, Context API, Hooks…)</li>
                                <li>Node</li>
                                <li>Typescript</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                                <li>Axios</li>
                            </ul>
                            <a href='https://www.udemy.com/certificate/UC-cdb84f53-84a6-4448-91d5-28eaeaf51573/'><BiLink/></a>
                        </div>

                    </div>
                    
                </div>

                <div className={styles.overflow_cont}>
                    <div className={styles.wrap_cert}>

                        <div className={styles.no_back_two}></div>

                        <div className={styles.info_cert}>
                            <h3>JavaScript [40 Horas]</h3>
                            <p>Competências:</p>
                            <ul>
                                <li>Interação com Arrays</li>
                                <li>Datas</li>
                                <li>Promises, Async/Await</li>
                                <li>Lógica de Programação</li>
                            </ul>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Certificates