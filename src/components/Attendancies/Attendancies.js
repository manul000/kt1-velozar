import Attendance from '../Attendance/Attendance';
import styles from './Attendancies.module.css';

const services = [
    { title: 'Годовое ТО', color: '#22356f' },
    { title: 'Выравнивание колёс', color: '#2152b8' },
    { title: 'Настройка переключателей', color: '#82b18a' }
];

function Attendancies() {
    return (
        <section id="services" className={styles.services} aria-label="Услуги">
            {services.map((service) => (
                <Attendance key={service.title} title={service.title} color={service.color} />
            ))}
        </section>
    );
}

export default Attendancies;
