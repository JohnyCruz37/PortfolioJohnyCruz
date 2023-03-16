import React from 'react';
import SecaoProjetos from '../moleculas/SecaoProjetos';
import SecaoSobre from '../moleculas/SecaoSobre';
import SecaoTec from '../moleculas/SecaoTec';

import '../Style/componentes/MainContainer.scss'

const MainContainer = () => {
    return (
        <main id='main-container'>
            <SecaoSobre />
            <SecaoTec />
            <SecaoProjetos />
            <button> <h6> ver projetos </h6> </button>
        </main>

    )
}

export default MainContainer;