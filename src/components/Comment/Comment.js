import styles from './Comment.module.css';

function Comment() {
    return (
        <section className={styles.comment} aria-label="О нашей мастерской">
            <p>
                Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них
                даже друзьями.
            </p>
            <p>
                А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
            </p>
        </section>
    );
}

export default Comment;
