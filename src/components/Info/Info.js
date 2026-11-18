import Header from '../Header/Header';
import InfoText from '../InfoText/InfoText';
import TextandImage from '../TextandImage/TextandImage';
import styles from './Info.module.css';

function Info() {
    return (
        <section id="about" className={styles.info}>
            <Header />
            <InfoText />
            <TextandImage />
        </section>
    );
}

export default Info;
