import React from 'react';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';

import '../Style/moleculas/SecaoRedesSociais.scss'

const SecaoRedesSociais = () => {
    return (
        <section id='rede-sociais'>
            <p> desenvolvedor web </p>
            <article className='icones-sociais'>
                <SlSocialLinkedin />
                <SlSocialInstagram />
                <SlSocialGithub />
            </article>
        </section>
    )
}

export default SecaoRedesSociais;