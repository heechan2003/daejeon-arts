import clsx from 'clsx';
import useInView from '../../hooks/useInView';
import styles from './Heading.module.css';

interface HeadingProps {
    title: string;
};

const Heading = ({ title }: HeadingProps) => {
    const { ref, isIntersecting } = useInView({ threshold: 0.5 });

    return (
        <div
            ref={ref}
            className={clsx(
                styles.headingWrap,
                isIntersecting && styles.animate
            )}
        >
            <h2>{title}</h2>
        </div>
    );
};

export default Heading;