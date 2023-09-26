import styles from './Projects.module.css'

import { GoCode } from "react-icons/go";
import { HiChevronRight } from "react-icons/hi";

import { BiCodeAlt } from "react-icons/bi";
import { BiLink } from "react-icons/bi";

import ContFromStudents from "/img/ilustr_project_post.png"
import ProjectFilm from "/img/ilustr_project_film.png"
import ProjectWeather from "/img/ilustr_project_clima.png"

const Projects = () => {
    return(
        
        <div className={styles.projects} id='projects'>
            <h1>Projetos</h1>
            <div className={styles.project_cont}>
                
                <div className={styles.illustr_project}>
                    <img src={ContFromStudents} alt="" />
                    <div className={styles.links_list}>
                        <a href='https://github.com/coelhobreno/post-professores.git'><BiCodeAlt/></a>
                        <a href='https://conteudo-para-alunos.netlify.app/'><BiLink/></a>
                    </div>
                </div>
                <div className={styles.descript_project}>
                    <div className={styles.title}>
                        <HiChevronRight/>
                        <h2>Compartilhamento de Conteúdo para Alunos</h2>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Biblioteca JavaScript: React</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Firebase: Para autenticação, armazenamento de dados em tempo real</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>React Router (para lidar com navegação entre páginas)</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>CSS Puro</span>
                    </div>
                    <div className={styles.title}>
                        <HiChevronRight/>
                        <h2>Funcionalidades</h2>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Login e Autenticação</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Criar, Editar e Excluir Posts</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Pesquisa e Filtros</span>
                    </div>
                </div>

            </div>
            <div className={styles.project_cont}>
                <div className={styles.illustr_project}>
                    <img src={ProjectFilm} alt="" />
                    <div className={styles.links_list}>
                        <a href='https://github.com/coelhobreno/buscador-de-filmes.git'><BiCodeAlt/></a>
                    </div>
                </div>
                <div className={styles.descript_project}>
                    <div className={styles.title}>
                        <HiChevronRight/>
                        <h2>Buscador de Filmes com React</h2>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Biblioteca JavaScript: React</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Biblioteca de Roteamento: React Router (para lidar com navegação entre páginas)</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Biblioteca de Análise de JSON: JSON (para processar os dados da API)</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Requisições HTTP: Método nativo do JavaScript chamado fetch</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span> CSS puro</span>
                    </div>
                </div>

            </div>
            <div className={styles.project_cont}>
                <div className={styles.illustr_project}>
                    <img src={ProjectWeather} alt="" />
                    <div className={styles.links_list}>
                        <a href='https://github.com/coelhobreno/consulta-de-clima.git'><BiCodeAlt/></a>
                    </div>
                </div>
                <div className={styles.descript_project}>
                    <div className={styles.title}>
                        <HiChevronRight/>
                        <h2>Consulta de Clima</h2>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>HTML, CSS e JS</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>API de Clima</span>
                    </div>
                    <div className={styles.title}>
                        <HiChevronRight/>
                        <h2>Funcionalidades</h2>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Pesquisa por Localização (Basta inserir o nome da cidade)</span>
                    </div>
                    <div className={styles.point_project}>
                        <HiChevronRight/>
                        <span>Exibição de Dados Climáticos em Tempo Real</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects