import s from './inicio.module.scss'
import comunidade from "../../assets/comunidade.png"
import leitura from "../../assets/leitura.png"
import transformacao from "../../assets/transformacao.png"
import Balanca from "../../assets/Balanca.png"
export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2> Por que devo doar?</h2>
                <section  className={s.conteinerCards}>
                
                    <section>
                    <img src={comunidade} alt="É uma imagem que mostra quatro icones de perfil em um circulo." />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.cardsMotivo}>
                    <img src={leitura} alt="É uma imagem que mostra um icones de perfil lendo um livro." />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.cardsMotivo}>
                    <img src={transformacao} alt="É uma imagem que mostra equipes em  icones de perfil em grupo." />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section className={s.cardsMotivo}>
                    <img src={Balanca} alt="É uma imagem que mostra uma balança de igualdade." />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                </section>
               
            </section>
        </main>
    )
}