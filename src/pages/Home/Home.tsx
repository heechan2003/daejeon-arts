import bannerImageUrl from "../../assets/images/banner/art_hall.webp"
import Landing from "./Landing/Landing";
import Teams from "./Teams/Teams";
import Banner from "../../components/Banner/Banner";
import Performances from "./Performance/Performances";
import News from "./News/News";

const bannerUrl = "https://www.youtube.com/watch?v=-qyCzczkniQ&ab_channel=%EB%8C%80%EC%A0%84%EC%98%88%EC%88%A0%EC%9D%98%EC%A0%84%EB%8B%B9";

const Home = () => {
    return (
        <div className="home-container">
            <Landing />
            <Teams />
            <Banner
                link={bannerUrl}
                imageUrl={bannerImageUrl}
            />
            <Performances />
            <News />
        </div>
    );
};

export default Home;