import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import Livrosdoados from '../../pages/Livrosdoados/Livrosdoados'
import Querodoar from '../../pages/queroDoar/Querodoar'
import s from './header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
         <header className={s.header}>
         <section className={s.logoheader}>
                <img src={logoLivro} alt="uma imagem que ilustra um livro como logo do site" />
                <h1>Livros vai na web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/'>inicio</Link></li>
                    
                    <li><Link className={s.link} to='/Livrosdoados'>Livros Doados</Link></li>
                    
                    <li><Link className={s.link} to='/Querodoar'>Quero doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraDeBusca}>
                <input type="search" name="" id=""placeholder="O que você preocura?" />
                <button>
                    <img src={lupa} className={s.lupa} alt="Imagem deu uma lupa branca" />
                </button>
            </section>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>

            <Route path='/Livrosdoados'element={<Livrosdoados/>}/>

            <Route path='/Querodoar'element={<Querodoar/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}