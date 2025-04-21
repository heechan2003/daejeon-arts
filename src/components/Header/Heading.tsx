import styles from './Heading.module.css';

interface HeadingProps {
    title: string;
};

const Heading = ({ title }: HeadingProps) => {
    return (
        <div
            className={styles.headingWrap}
        >
            <h2>{title}</h2>
        </div>
    );
};

export default Heading;