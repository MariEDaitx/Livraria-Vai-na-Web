import iconeLivro from '../../assets/iconeLivro.png'
import s from './querodoar.module.scss'
import { useState } from 'react'
import axios from 'axios'


export default function Querodoar(){
    


    const[titulo,setTitulo ]= useState("")
    const[categoria,setCategoria] = useState("")
    const[autor,setAutor] = useState("")
    const[image_url,setImage_url ]= useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImage_url(e.target.value)
    }
    
    const enviarDados = async() =>{
        const dadosAEnviar ={
            titulo,
            categoria,
            autor,
            image_url
        }
    await axios.post("https://api-livraria-vnw.onrender.com/doar",dadosAEnviar)
    }
    return(
        <section>
            <section className={s.queroDoarsection}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div>
                        <img src={iconeLivro} alt="A uma imagem que mostra um livro aberto" />
                        <h2>informações do Livro</h2>
                    </div>
                     <input type="text" placeholder='Titulo' onChange={capturaTitulo} />
                        <input type="text" placeholder='Categoria' onChange={capturaCategoria} />
                        <input type="text" placeholder='Autor' onChange={capturaAutor}/>
                        <input type="text"  placeholder='Link da Imagem' onChange={capturaImagem}/>
                        <input type="submit" value="Doar" className={s.BotãoDoar} onClick={enviarDados}/>
                </form>
            </section>
        </section>
    )
}