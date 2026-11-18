import logo from '../../images/logo.svg';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <a href="#about" aria-label="Велозар — на главную">
                <img src={logo} alt="Велозар" />
            </a>
            <nav aria-label="Основная навигация">
                <a href="#about">О нас</a>
                <a href="#services">Услуги</a>
                <a href="#rental">Аренда</a>
            </nav>
            <a className={styles.contact} href="#rental">
                Связаться
            </a>
        </header>
    );
}

export default Header;
