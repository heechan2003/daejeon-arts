import { useState, useEffect } from 'react';
import { useLazyBackgrounds } from '../../../hooks/useLazyBackground';
import { useDevice } from '../../../context/DeviceContext';
import arthallImg from '../../../assets/images/sub_img/arthall.webp'
import ArthallCard from './Cards/ArthallCard';
import TeamCard from './Cards/TeamCard';
import { teamsInfo } from './teamsInfo';
import styles from  './Teams.module.css';

const Teams = () => {
    useLazyBackgrounds();
    const { isMobile } = useDevice();
    // stores card currently expanded on mobile
    const [activeCard, setActiveCard] = useState<string | null>(null);

    useEffect(() => {
        // reset active card when switched to desktop
        if (!isMobile) {
            setActiveCard(null);
        }
    }, [isMobile]);

    // Toggle overlay text(mobile only)
    const mobileToggleCard = (label: string) => {
        if(isMobile) {
            setActiveCard(activeCard === label ? null : label);
        };
    };

    return (
        <div className={styles.teamsWrap}>
            <div
                className={styles.teamCardsWrap}
            >
                <ArthallCard
                    label='arthall'
                    imageUrl={arthallImg}
                    activeCard={activeCard}
                    mobileToggleCard={mobileToggleCard}
                />
                {teamsInfo.map(({className, label, desc, url, imageUrl}, key) => {
                    return (
                        <TeamCard
                            key={key}
                            className={className}
                            label={label}
                            desc={desc}
                            url={url}
                            imageUrl={imageUrl}
                            activeCard={activeCard}
                            mobileToggleCard={mobileToggleCard}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Teams;