import dinosaur from '../../images/dinosaur.svg';
import styles from './TextandImage.module.css';

function TextandImage() {
    return (
        <div className={styles.content}>
            <p>
                Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые
                смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим
                чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.
            </p>
            <img src={dinosaur} alt="Зелёный динозавр в кепке едет на красном велосипеде" />
        </div>
    );
}

export default TextandImage;
