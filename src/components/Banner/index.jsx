import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Espero que você goste do conhecimento aqui depositado.
                </p>
            </div>

            <div className={styles.imagens}>
                <img src={circuloColorido} aria-hidden={true} className={styles.circuloColorido}/>
                <img src={minhaFoto}  className={styles.minhaFoto}/>
            </div>
        </div>
    )
}