import OffersText from '../OffersText/OffersText';
import workshop from '../../images/workshop.svg';
import styles from './Offers.module.css';

function Offers() {
    return (
        <section id="offers" className={styles.offers}>
            <OffersText />
            <img src={workshop} alt="Ремонт велосипеда в мастерской" />
        </section>
    );
}

export default Offers;
