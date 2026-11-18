import BikerentText from '../BikerentText/BikerentText';
import bikes from '../../images/bikes.svg';
import styles from './Bikerent.module.css';

function Bikerent() {
    return (
        <section id="rental" className={styles.rental}>
            <img src={bikes} alt="Велосипеды, подготовленные к прокату" />
            <BikerentText />
        </section>
    );
}

export default Bikerent;
