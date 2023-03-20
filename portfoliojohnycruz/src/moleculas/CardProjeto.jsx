import { DiHtml5, DiCss3, DiJavascript, DiSass } from 'react-icons/di';

import '../Style/moleculas/CardProjeto.scss'

import img from '../img/Cronometro.png'

const CardProjeto = () => {
    return (
        <div className='card-projeto'>
            <a href='#' target='_blank' className='card-projeto-link'>
                <div className='card-background'>
                    <img src={img} alt="Imagem do projeto" />
                    <div className='card-body'>
                        <h3> Cronômetro JavaScript </h3>
                        <p> Para aperfeiçoar meus conceitos de JavaScript e SASS. </p>
                        <div className="card-info">
                            <div className="card-info-tech">
                                <DiHtml5/>
                                <DiCss3/>
                                <DiSass/>
                                <DiJavascript/>
                            </div>
                            <a href='#' target='_blank' > link para o github</a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardProjeto;