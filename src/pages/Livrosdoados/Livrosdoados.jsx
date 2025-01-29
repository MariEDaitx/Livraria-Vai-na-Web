import LivroProtagonistas from '../../assets/livroUm.png'
import s from'./livrosdoados.module.scss'
export default function Livrosdoados(){
    return(
        <section className={s.LivrosdoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.conteinerClass}>
                <section>
                    <img src={LivroProtagonistas} alt=" A imagem mostra um livro da autora sussan de ficção,chamado O protagonista" />
                    <div>
                        
                     <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>   
                </section>
            </section>
        </section>
    )

}