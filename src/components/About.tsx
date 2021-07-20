import styles from '../styles/pages/Home.module.css';

export default function About() {
    return (
        <div className={ styles.about }>
            <div className={'container'}>
                <h2>
                    Sobre
                    <span>Sobre</span>
                </h2>
                <div className={ styles.box }>
                <p>
                    Advogada desde 2017, com vasta experiência nas áreas de direito cívil, de família e do consumidor. 
                    Barcharela em Direito pela Universidade do Sul de Santa Catarina - UNISUL. Pós graduanda em Direito do Consumidor.<br/><br />
                    Atuante como advogada pela defensoria pública do estado de Santa Catarina na área de Direito da família e criminal.
                </p>
                <img src="/images/about.svg" alt="Sobre"/>
                </div>
            </div>
        </div>
    )
}