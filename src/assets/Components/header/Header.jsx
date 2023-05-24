import React from 'react';
import Logo from '../../img/logo.png'


function Header() {
    return (
        <>
            <header class="header">
                <div class="container_header">
                    <a href="#" class="link" aria-label="link para página atual">
                        <img src={Logo} alt="Logo principal" class="logo_header" width="7rem" height="auto" />
                    </a>
                    <nav class="menu_header">
                        <button class="button_header" aria-expanded="false" aria-controls="menu" aria-haspopup="true" aria-label="Abrir menu">
                            <span class="menu_icone-header"/>
                        </button>
                        <ul class="list_header" role="menu">
                            <li class="iten_header"><a href="#principal" class="link_iten">Home</a></li>
                            <li class="iten_header"><a href="#sobre" class="link_iten">Sobre</a></li>
                            <li class="iten_header"><a href="#qualificacoes" class="link_iten">Qualificações</a></li>
                            <li class="iten_header"><a href="#conhecimento" class="link_iten">Conhecimento</a></li>
                            <li class="iten_header"><a href="#servicos" class="link_iten">Serviços</a></li>
                            <li class="iten_header"><a href="#projeto" class="link_iten">Projetos</a></li>
                            <li class="iten_header"><a href="#contato" class="link_iten">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
