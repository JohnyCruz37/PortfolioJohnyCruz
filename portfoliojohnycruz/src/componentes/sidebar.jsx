import React from 'react';
import SecaoContato from '../moleculas/SecaoContato';
import SecaoRedesSociais from '../moleculas/SecaoRedesSociais';

import '../Style/componentes/Sidebar.scss'

const Aside = () => {
    return (
        <aside id='aside'>

            <img src="https://via.placeholder.com/250x300" alt="minha foto" />
            <SecaoRedesSociais />
            <SecaoContato />

            <button> download currículo </button>
        </aside>

    )
}

export default Aside;