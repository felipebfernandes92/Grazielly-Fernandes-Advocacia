import Image from 'next/image';
import styles from '../styles/pages/Home.module.css';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Presentation() {
    return (
        <div className={styles.presentation}>
        <div className={'container ' + styles.firstPage}>
          <header>
            <Image
              layout="fixed"
              quality="100"
              src="/images/logo.png"
              width={222}
              height={110}
            />
            <nav className={styles.menu}>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Atendimento</a></li>
                <li><a href="">Contato</a></li>
              </ul>
            </nav>
            <nav className={styles.social}>
              <ul>
                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5548999201489"><AiOutlineWhatsApp size="1.75rem" /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/graziellyadvogada/"><AiOutlineInstagram size="1.75rem" /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/graziellyadvogada"><AiOutlineFacebook size="1.75rem" /></a></li>
              </ul>
            </nav>
          </header>

          <div className={styles.main}>
            <h1>Grazielly F Fernandes</h1>
            <h2>Advogada / Mediadora / Consultora Jurídica</h2>
            <Image
                layout="fill"
                objectFit="contain"
                objectPosition="right 3rem bottom 0"
                src="/images/perfil.svg"
              />
            </div>
        </div>
      </div>
    )
}

