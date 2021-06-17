import styles from '../styles/pages/Home.module.css';

export default function Coverage() {
    return (
        <div className={ styles.coverage }>
            <div className={'container'}>
                <h2>
                    Atendimento
                </h2>
                <div className={ styles.box }>
                    <p>
                    Atendimento personalizado, online ou presencial de acordo com as necessidades de cada cliente.<br /><br />
                    Atuação nas cidades de Tubarão, Capivari de Baixo, Jaguaruna, Armazém e Laguna.
                    </p>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317511.512450102!2d-49.0264405167721!3d-28.448218316127342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5213620855408563!2sGrazielly%20F.%20Fernandes%20Advogada!5e0!3m2!1spt-BR!2sbr!4v1623888451294!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}