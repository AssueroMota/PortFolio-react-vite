import React from "react";
import ImgReact from '../../img/React-Cep.png'
import JogoDaVelha from '../../img/JogoDaVelha.png'
import Andamento from '../../img/Localizador de Produtos.png'
import ProjectTechLito from '../../img/ProjectTech.png'
import GrauTech from '../../img/Commerce-GrauTech.png'

function Projects() {
    return (
        <>
            <section class="section_projetos" id="projeto">
                <h2 class="titulo_projeto">Projetos React</h2>
                <div class="container_projetos">
                    <div class="card_projeto">
                        <img src={ImgReact} alt="" class="imagem_fundo" />
                        <div class="card_descricao">
                            <h3 class="titulo_card">React Address Locator</h3>
                            <nav class="card_nav">
                                <a href="https://github.com/AssueroMota/React-Address-Locator" class="link" target="_blank"
                                    aria-label="Abrir Github">
                                    <button class="button github">Github</button></a>
                                <a href="https://assueromota.github.io/WebLocalizador/" class="link" target="_blank"
                                    aria-label="Abrir página">
                                    <button class="button site">Site</button>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div class="card_projeto">
                        <img src={JogoDaVelha} alt="JogoDaVelha" class="imagem_fundo"/>
                            <div class="card_descricao">
                                <h3 class="titulo_card">React-Tic-Tac-Toe-Game</h3>
                                <nav class="card_nav">
                                    <a href="https://github.com/AssueroMota/React-Tic-Tac-Toe-Game/tree/main" class="link"
                                        target="_blank" aria-label="Abrir Github">
                                        <button class="button github">Github</button></a>
                                    <a href="https://assueromota.github.io/React-Game-Site/" class="link" target="_blank"
                                        aria-label="Abrir página">
                                        <button class="button site">Site</button>
                                    </a>
                                </nav>
                            </div>
                    </div>
                    <div class="card_projeto">
                        <img src={Andamento} alt="" class="imagem_fundo"/>
                            <div class="card_descricao">
                                <h3 class="titulo_card">ChatBot</h3>

                            </div>
                    </div>

                    <div class="card_projeto">
                        <img src={Andamento} alt="" class="imagem_fundo"/>
                            <div class="card_descricao">
                                <h3 class="titulo_card LoadingProject">Shopping Cart with React JS</h3>

                            </div>
                    </div>
                </div>
                <div class="container_button">
                </div>
            </section>
            <section class="section_projetos" id="projeto">
                <h2 class="titulo_projeto">Projetos Html + CSS + JS</h2>
                <div class="container_projetos">
                    <div class="card_projeto">
                        <img src={ProjectTechLito} alt="" class="imagem_fundo"/>
                            <div class="card_descricao">
                                <h3 class="titulo_card">ServiceTechInfo</h3>
                                <nav class="card_nav">
                                    <a href="https://github.com/AssueroMota/ServiceTechInfo" class="link" target="_blank"
                                        aria-label="Abrir Github">
                                        <button class="button github">Github</button></a>
                                    <a href="https://assueromota.github.io/ServiceTechInfo/" class="link" target="_blank"
                                        aria-label="Abrir página">
                                        <button class="button site">Site</button>
                                    </a>
                                </nav>
                            </div>
                    </div>
                    <div class="card_projeto">
                        <img src={GrauTech} alt="" class="imagem_fundo"/>
                            <div class="card_descricao">
                                <h3 class="titulo_card">Hardware-E-commerce</h3>
                                <nav class="card_nav">
                                    <a href="https://github.com/AssueroMota/Computer-Hardware-E-commerce-Website" class="link"
                                        target="_blank" aria-label="Abrir Github">
                                        <button class="button github">Github</button></a>
                                    <a href="https://assueromota.github.io/Computer-Hardware-E-commerce-Website/assets/html/processadores.html"
                                        class="link" target="_blank" aria-label="Abrir página">
                                        <button class="button site">Site</button>
                                    </a>
                                </nav>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;