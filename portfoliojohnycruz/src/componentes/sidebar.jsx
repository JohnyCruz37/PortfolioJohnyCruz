import React from 'react';
import SecaoContato from '../moleculas/SecaoContato';
import SecaoRedesSociais from '../moleculas/SecaoRedesSociais';

import '../Style/componentes/Sidebar.scss'

const Aside = () => {
    return (
        <aside id='aside'>
            <figure>
                <img src="https://via.placeholder.com/250x300" alt="minha foto" />
            </figure>
            <p id='cargo'> desenvolvedor web </p>
            <SecaoRedesSociais />
            <SecaoContato />

            <button type='button'> <h6> download currículo </h6>  </button>
        </aside>

    )
}

export default Aside;