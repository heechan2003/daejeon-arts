import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useInView from '../../../hooks/useInView';
import Heading from '../../../components/Header/Heading';
import { formatDesc } from '../../../utils/formatDesc';
import { teamsInfo } from './teamsInfo';
import styles from  './Teams.module.css';

const Teams = () => {
    const { ref, isIntersecting } = useInView({ threshold: 0.5 });

    return (
        <div className={styles.teamsWrap}>
            <Heading title='TEAMS'/>
            <div
                ref={ref}
                className={clsx(
                    styles.teamCardsWrap,
                    isIntersecting && styles.animate
                )}
            >
                {teamsInfo.map(({label, desc, url, imageUrl}, key) => (
                    <div
                        key={key}
                        className={styles.teamCard}
                    >
                        <div className={styles.teamImageContainer}>
                            <img src={imageUrl} alt={`${label} image`} />
                        </div>
                        <div className={styles.teamTextContainer}>
                            <h3>{label}</h3>
                            <p>{formatDesc(desc)}</p>
                            <Link 
                                to={url}
                                className={styles.teamLink}
                            >
                                사이트 바로가기
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;