import React from 'react';
import {SiGooglemaps, SiMinutemailer} from 'react-icons/si';
import {SlScreenSmartphone} from 'react-icons/sl';

import '../Style/moleculas/SecaoContato.scss';
import ContatoItem from './ContatoItem';

const SecaoContato = () => {
    return(
        <section id="contato">
            <ContatoItem 
                icone={<SlScreenSmartphone/>}
                titulo={'celular'}
                texto={'(xx) 9.xxxx-xxxx'}
            />
            <ContatoItem 
                icone={<SiMinutemailer/>}
                titulo={'e-mail'}
                texto={'johny@cruz.com'}
            />
            <ContatoItem 
                icone={<SiGooglemaps/>}
                titulo={'Localizaçao'}
                texto={'bom jesus dos perdões - sp - brasil'}
            />
        </section>
    )
}

export default SecaoContato;