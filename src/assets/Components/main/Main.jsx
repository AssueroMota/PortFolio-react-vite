import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function Main() {
    return (
        <section class="section_main" id="principal">
            <div class="container_main">
                <p class="destaque_main">A tecnologia é a força motriz por trás da mudança constante</p>
                <h2 class="titulo_main">Olá, me chamo <span class="destaque">Assuero </span></h2>
                <p class="cargo_main">Front-end developer</p>
                <p class="descricao_main">Seja bem-vindo(a) por aqui. Espero ajudá-lo(a) de alguma forma.</p>
                <a href="#sobre"><button class="button">Saiba mais</button></a>
            </div>
            <nav class="navigation_main">
                <ul class="list_main">
                    <li class="iten_main"><a href="https://github.com/AssueroMota" class="link" target="_blank"
                        aria-label="Visitar Github de Assuero">
                            <BsGithub className='icons BsGit'/>
                    </a>

                    </li>
                    <li class="iten_main"><a href="https://www.linkedin.com/in/AssueroMota/" class="link"
                        target="_blank" aria-label="Visitar Linkedin de Assuero">
                        < BsLinkedin className='icons BsLink' />
                    </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Main;