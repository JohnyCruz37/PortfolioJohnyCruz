import Botao from '../atomo/botao';
import TituloSecao from '../atomo/TituloSecao';

import '../Style/moleculas/SecaoProjetos.scss'
import CardProjeto from './CardProjeto';

// INFORMAÇÕES DOS CARD


const SecaoProjetos = () => {
    return (
        <section id='projetos'>
            <article className='projeto-header'>
                <TituloSecao texto={'projetos'} />
                <p> E aqui está trabalhos que têm o valor emocional, por contarem a história da minha carreira. Alguns conservo até mesmo com alguns erros para que fique registrado de forma mais evidente a minha evolução ao serem comparados com trabalhos mais recentes. </p>
            </article>
            <article className="projetos-cards">
                    <CardProjeto/>
            </article>
            <Botao texto={'ver projeto'} />
        </section>
    )
}

export default SecaoProjetos;