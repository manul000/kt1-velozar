import styles from './Attendance.module.css';

function Attendance({ title, color }) {
    return (
        <article className={styles.service} style={{ backgroundColor: color }}>
            <h2>{title}</h2>
        </article>
    );
}

export default Attendance;
