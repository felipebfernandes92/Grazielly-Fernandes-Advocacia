import Image from 'next/image';
import styles from '../styles/pages/Home.module.css';

export default function Home() {

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
              <li><a href="">Insta</a></li>
              <li><a href="">Whats</a></li>
              <li><a href="">Face</a></li>
            </ul>
          </nav>
        </header>

        <div className={styles.main}>
          <Image
              layout="fill"
              objectFit="contain"
              objectPosition="right 100px bottom 0"
              src="/images/perfil.svg"
            />
          </div>
      </div>
    </div>
  )
}