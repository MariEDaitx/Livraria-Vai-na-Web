import logoFacebook from '../../assets/logoFacebook.png'
import logoTwiter from '../../assets/logoTwiter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer className={s.Footer}>
            <section className={s.contatosFooter}>  
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt=" A imagem mostra o logotipo da plataforma Facebook"/></a>
                    
                    <a href=""><img src={logoTwiter} alt=" A imagem mostra o logotipo da plataforma Twitter" /></a>
                    
                    <a href=""><img src={logoYoutube} alt=" A imagem mostra o logotipo da plataforma Youtube" /></a>
                    
                    <a href=""><img src={logoLinkedin} alt=" A imagem mostra o logotipo da plataforma Linkefin" /></a>

                    <a href=""><img src={logoInstagram} alt=" A imagem mostra o logotipo da plataforma Instagram" /></a>

                </nav>
            </section >
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}