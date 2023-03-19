import React from 'react';
import SecaoProjetos from '../moleculas/SecaoProjetos';
import SecaoSobre from '../moleculas/SecaoSobre';
import SecaoTec from '../moleculas/SecaoTec';

import '../Style/componentes/MainContainer.scss'

const MainContainer = () => {
    return (
        <main id='main-container' className='main-animacao'>
            <SecaoSobre />
            <SecaoTec />
            <SecaoProjetos />
        </main>

    )
}

export default MainContainer;