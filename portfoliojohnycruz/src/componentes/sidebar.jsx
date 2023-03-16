import React from 'react';
import SecaoContato from '../moleculas/SecaoContato';
import SecaoRedesSociais from '../moleculas/SecaoRedesSociais';

import '../Style/componentes/Sidebar.scss'

const Aside = () => {
    return (
        <aside id='aside'>
            <div>
                <img src="https://via.placeholder.com/250x300" alt="minha foto"/>
                <SecaoRedesSociais />
                <SecaoContato />
            </div>
        </aside>

    )
}

export default Aside;