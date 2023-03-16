import React from 'react';
import TituloSecao from '../atomo/TituloSecao';

import '../Style/moleculas/SecaoSobre.scss'

const SecaoSobre = () => {
    return (
        <section id='sobre'>
            <TituloSecao texto={"sobre"} />
            <p>
                ipson Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veniam esse ab, iusto sed dicta maiores distinctio provident quae aspernatur repudiandae natus dolorum ipsa repellat ratione? Nemo optio sint aliquam.
            </p>
        </section>
    )
}

export default SecaoSobre;