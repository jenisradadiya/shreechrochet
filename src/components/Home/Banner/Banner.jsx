import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Sells</h1>
                <p>Always do your best. What you plant now, you will harvest later.</p>
                <div className="ctas">
                    <div className="banner-cta">Read more</div>
                    <div className="banner-cta v2">Shop now</div>
                </div>
            </div>
            <img src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
