import SecaoContato from '../moleculas/SecaoContato';
import SecaoRedesSociais from '../moleculas/SecaoRedesSociais';

import '../Style/componentes/Sidebar.scss'

import perfil from '../img/perfil.jpg'
import Botao from '../atomo/botao';

const Aside = () => {
    return (
        <aside id='aside' className='aside-animacao'>
            <figure className='figure-animacao'>
                <img src={perfil} alt="minha foto" />
            </figure>
            <p id='cargo'> desenvolvedor web </p>
            <SecaoRedesSociais />
            <SecaoContato />

            <Botao texto={'download currículo'} />
        </aside>

    )
}

export default Aside;