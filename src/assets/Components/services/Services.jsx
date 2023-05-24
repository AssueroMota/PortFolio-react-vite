import React from "react";

function Services() {
    return (
        <section class="section_servico" id="servicos">
            <header class="cabecalho_servico">
                <h2 class="titulo">Meus <span class="destaque">serviços</span> de desenvolvimento web </h2>
                <p class="descricao">Aqui estão algumas metodologias que aplico nos meus projetos.</p>
            </header>
            <div class="container_servico">
                <div class="bloco_servico">
                    <h3 class="titulo">Desenvolvimento Web</h3>
                    <p class="descricao">Desenvolvimento de sites responsivos e acessíveis, utilizando tecnologias
                        modernas como HTML5, CSS3 e JavaScript.</p>
                </div>
                <div class="bloco_servico">
                    <h3 class="titulo">Desenvolvimento de animações</h3>
                    <p class="descricao">Desenvolvimento de animações em CSS e JavaScript para melhorar a experiência do
                        usuário.</p>
                </div>
                <div class="bloco_servico">
                    <h3 class="titulo">FrameWorks</h3>
                    <p class="descricao">Desenvolvimento de aplicações web utilizando frameworks como React.</p>
                </div>
            </div>
        </section>
    )
}

export default Services;