import React from "react";

function Highlight() {
    return (
        <section class="section_destaque">
        <div class="bloco_destaque bloco-left">
            <p class="numero"><span class="destaque_numero">+</span> 02</p>
            <p class="destaque_descricao">Experiência de trabalho</p>
        </div>
        <div class="bloco_destaque bloco-rigth">
            <p class="numero"><span class="destaque_numero">+</span> 04</p>
            <p class="destaque_descricao">Cursos extracurriculares</p>
        </div>
        <div class="bloco_destaque bloco-left">
            <p class="numero"><span class="destaque_numero">+</span> 02</p>
            <p class="destaque_descricao">Linguagens de Prog</p>
        </div>

        <div class="bloco_destaque bloco-rigth">
            <p class="numero"><span class="destaque_numero">+</span> 13</p>
            <p class="destaque_descricao">Projetos concluídos</p>
        </div>
    </section>
)
}

export default Highlight;