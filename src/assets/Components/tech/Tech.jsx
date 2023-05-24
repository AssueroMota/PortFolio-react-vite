import React from "react";
import TailWind from '../../img/tailwind-css.svg'
import TypeScript from '../../img/typescript.svg'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaSass } from "react-icons/fa";
import {DiJqueryLogo} from "react-icons/di";
function Tech() {
    return (
            <section class="section_tech" id="conhecimento">
                <h2 class="titulo_tech">Tecnologias</h2>
                <div class="container_tech">
                    <div class="bloco_tech">
                        <FaHtml5 className='FaHtml5'/>
                        <p class="nome_tech">Html 5</p>
                    </div>
                    <div class="bloco_tech">
                       <FaCss3Alt className='FaCss3Alt'/>
                        <p class="nome_tech">Css 3</p>
                    </div>
                    <div class="bloco_tech">
                       <FaBootstrap className='FaBootstrap'/>
                        <p class="nome_tech">BootStrap</p>
                    </div>
                    <div class="bloco_tech">
                        <img src={TailWind} class="tailwind" alt="Tailwind CSS" />
                        <p class="nome_tech">Tailwind Css</p>
                    </div>
                    <div class="bloco_tech">
                       <FaSass className='FaSass'/>
                        <p class="nome_tech">Scss</p>
                    </div>
                    <div class="bloco_tech">
                       <FaJsSquare className='FaJsSquare'/>
                        <p class="nome_tech">JavaScript</p>
                    </div>
                    <div class="bloco_tech">
                       <DiJqueryLogo className='DiJqueryLogo'/>
                        <p class="nome_tech">JQuery</p>
                    </div>
                    <div class="bloco_tech">
                        <img src={TypeScript} class="typescript" alt="TypeScript" />
                        <p class="nome_tech">TypeScript</p>
                    </div>
                    <div class="bloco_tech">
                        <FaReact className='FaReact'/>
                        <p class="nome_tech">React</p>
                    </div>
                </div>
            </section>
    )
}

export default Tech;