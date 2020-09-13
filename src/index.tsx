import React from 'react'
import { render } from 'react-dom'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import * as RS from 'react-share'

import * as S from './styles'

const IMG_URL = 'http://s3.amazonaws.com/redenaturaprod/imagens/cnd/profile/profile_4104553026_1597431778764.jpg';


const App = () => {
    return (
        <>
            <S.global />

            <header>
                <img src={IMG_URL} />
            </header>
            
            <main>
                <div>
                    <ul>
                        <li>
                            <MdWeb />
                            <a href="https://www.natura.com.br/consultoria/annalopes14">Site</a>
                        </li>

                        <li>
                            <FaWhatsapp id="whatsapp" />
                            <a href="https://wa.me/5551981863585">WhatsAPP</a>
                        </li>

                        <li>
                            <FaPhone />
                            <a href="tel:+5551981863585">Telefone</a>
                        </li>
                    </ul>

                    <p>
                        Ou então ajude compartilhando o meu trabalho
                    </p>

                    <RS.FacebookShareButton
                        url={window.location.href}
                        hashtag="consultoranaturinha">

                        <RS.FacebookIcon />

                    </RS.FacebookShareButton>

                    <RS.WhatsappShareButton
                        url={window.location.href}
                        title="Olá, consultora naturinha batendo a sua porta">

                        <RS.WhatsappIcon />

                    </RS.WhatsappShareButton>
                </div>
            </main>
        </>
    )
}

render(<App />, document.querySelector('#root'))