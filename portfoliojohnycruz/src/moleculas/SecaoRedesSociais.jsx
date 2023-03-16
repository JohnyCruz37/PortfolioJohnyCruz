import React from 'react';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { SiWhatsapp } from 'react-icons/si';

import '../Style/moleculas/SecaoRedesSociais.scss'

const SecaoRedesSociais = () => {
    return (
        <section id='rede-sociais'>
            <p> desenvolvedor web </p>
            <article className='icones-sociais'>
                <i> <SlSocialLinkedin /></i>
                <i> <SlSocialInstagram /> </i>
                <i> <SlSocialGithub /> </i>
                <i> <SiWhatsapp /> </i>
            </article>
        </section>
    )
}

export default SecaoRedesSociais;