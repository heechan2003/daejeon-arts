import clsx from 'clsx';
import { useLazyBackgrounds } from '../../../hooks/useLazyBackground';
import arthallImg from '../../../assets/images/sub_img/arthall.webp'
import Heading from '../../../components/Header/Heading';
import { formatDesc } from '../../../utils/formatDesc';
import { teamsInfo } from './teamsInfo';
import styles from  './Teams.module.css';

const Teams = () => {
    useLazyBackgrounds();

    return (
        <div className={styles.teamsWrap}>
            <Heading title='TEAMS'/>
            <div
                className={styles.teamCardsWrap}
            >
                <div 
                    className={clsx(
                        styles.teamCard,
                        styles.arthall,
                        'lazy-bg'
                    )}
                    data-bg={arthallImg}
                >
                </div>
                {teamsInfo.map(({className, label, desc, url, imageUrl}, key) => (
                    <div
                        key={key}
                        className={clsx(
                            styles.teamCard,
                            styles[className],
                            'lazy-bg'
                        )}
                        data-bg={imageUrl}
                    >
                        <div className={styles.teamTextContainer}>
                            <h3>{label}</h3>
                            <p>{formatDesc(desc)}</p>
                            <a
                                className={styles.teamLink}
                                href={url}
                                target='_blank'
                            >
                                사이트 바로가기
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;