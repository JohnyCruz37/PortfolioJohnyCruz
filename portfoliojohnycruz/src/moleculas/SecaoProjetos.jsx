import React from 'react';
import TituloSecao from '../atomo/TituloSecao';

import '../Style/moleculas/SecaoProjetos.scss'

const SecaoProjetos = () => {
    return (
        <section id='projetos'>
            <TituloSecao texto={'projetos'}/>
            <p> ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum beatae, consequatur facere necessitatibus itaque maxime excepturi possimus quis mollitia. </p>
            <button> <h6> ver projetos </h6> </button>
        </section>
    )
}

export default SecaoProjetos;