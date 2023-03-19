import React from 'react';
import { SiGooglemaps, SiMinutemailer } from 'react-icons/si';
import { SlScreenSmartphone } from 'react-icons/sl';
import ContatoItem from './ContatoItem';

import '../Style/moleculas/SecaoContato.scss';

const SecaoContato = () => {
    return (
        <section id="contato">
            <article className="contato-container contato-animacao">
                <ContatoItem
                    icone={< SlScreenSmartphone />}
                    titulo={'celular'}
                    texto={'(11) 9.5681-1112'}
                />

                <ContatoItem
                    icone={< SiMinutemailer />}
                    titulo={'e-mail'}
                    texto={'johnygoncalvescruz@gmail.com'}
                />

                <ContatoItem
                    icone={< SiGooglemaps />}
                    titulo={'Localização'}
                    texto={'Bom Jesus dos Perdões - SP - Brasil'}
                />
            </article>
        </section>
    )
}

export default SecaoContato;