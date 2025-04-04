import LivroProtagonistas from '../../assets/livroUm.png'
import s from'./livrosdoados.module.scss'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { use } from 'react'


export default function Livrosdoados(){
    
    const [livros, setlivros] = useState([])

    const getlivros = async () => {
        const resposta = await axios.get("https://api-livraria-vnw.onrender.com/livros")
        setlivros(resposta.data)
    }

    useEffect(()=>{
        getlivros()
        alert("useEffect execultou")
    }, [])

    return(
        <section className={s.LivrosdoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.conteinerCards}>
               {livros.map((item) => (
                <section>
                    <div>
                        <h3>{item.titulo}</h3>
                        <img src={item.image_url} alt={item.titulo} />
                    </div>
                </section>
               ))}
               
            </section>
        </section>
    )

}