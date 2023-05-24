import React from "react";
import ArrowRigth from '../../img/arrow-rigth.png'
import PhotoPerfil from '../../img/fotoperfil.png'
import CvAssuero from '../../document/AssueroCv.pdf'
import { RxDownload } from "react-icons/rx";


function About() {
    return (

        <section class="section_sobre" id="sobre">
            <a href="https://www.linkedin.com/in/AssueroMota/" target="_blank">
                <img src={PhotoPerfil} class="foto_perfil" alt="Foto de Assuero" />
            </a>
            <div class="container_sobre">
                <p class="texto_destaque">
                    <img src={ArrowRigth} class="arrow" /> DESENVOLVEDOR FRONT-END
                </p>
                <h3 class="titulo_sobre">Desenvolvedor Front-end focado em React e JavaScript puro.</h3>
                <p class="descricao_sobre">Meu nome é Assuero, tenho 29 anos e estou na área de tecnologia há mais de 4
                    anos. Tenho me dedicado no último ano ao desenvolvimento de software com foco em programação
                    web e banco de dados, e estou procurando uma oportunidade como desenvolvedor Jr.
                </p>
                <p class="descricao_sobre">
                    Meu currículo completo com informações mais detalhadas sobre minha
                    experiência está disponível abaixo. Caso prefira, podemos agendar uma chamada através do meu e-mail,
                    também disponibilizado aqui.
                </p>
                <div class="container_button">
                    <a href={CvAssuero} target="_blank" aria-label="Baixar curriculo de Assuero" class="link">
                        <button class="button_cv">Baixar CV <RxDownload className='icons'/></button>
                    </a>
                    <button class="button_email botaoCopiar" value="Assueromota@hotmail.com" type="button"
                        aria-label="Copiar email de Vinícius">Copiar e-mail</button>
                </div>
            </div>
        </section >

    )
}

export default About;