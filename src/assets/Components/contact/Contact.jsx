import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
function Contact() {
    return (
        <>
            <section class="section_contato" id="contato">
                <header class="cabecalho_contato">
                    <h2 class="titulo titulo_contato">Fale comigo</h2>
                    <p class="descricao descricao_contato">Você pode entrar em contato comigo por e-mail ou pelas minhas
                        redes sociais para conversarmos diretamente.</p>
                </header>
                <div class="lista_rede">
                    <div class="item_rede">
                        <a href="https://www.linkedin.com/in/assueromota/" class="link" target="_blank"
                            aria-label="Abrir Linkedin de Assuero">
                            <FaLinkedinIn className='FaLinkedinIn'/> Linkedin
                            <FaCheck/>
                        </a>
                    </div>
                    <div class="item_rede">
                        <a href="https://github.com/AssueroMota" class="link" target="_blank"
                            aria-label="Abrir Github de Assuero">
                            <FaGithubAlt className='FaGithubAlt'/> Github
                            <FaCheck/>
                        </a>
                    </div>
                </div>
            </section>
            <a href="#principal" class="link" aria-label="Voltar para o topo da página">
                <button class="botao_topo"><FaAngleDoubleUp className='icone'/>Voltar ao topo</button>
            </a>
            
        </>
    )
}
export default Contact;