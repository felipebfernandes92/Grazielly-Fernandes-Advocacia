import styles from '../styles/pages/Home.module.css';

export default function Contact() {
    return (
        <div className={ styles.contact }>
            <div className={'container'}>
                <h2>
                    Contato
                    <span>C</span>
                </h2>
                <div className={ styles.grid }>
                    <div className={ styles.infos }>
                        <p>48 99920 1489</p>
                        <p>graziellyfernandesadv@gmail.com</p>
                    </div>
                    <div className={ styles.form }>
                        form
                    </div>
                </div>
                
            </div>
        </div>
    )
}