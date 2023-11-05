import Banner from "../Components/Home/Banner";
import HomeJobs from "../Components/Home/HomeJobs";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <>
            <section className="container mx-auto mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <Banner></Banner>
            </section>
            <section>
                <HomeJobs></HomeJobs>
            </section>
        </>
    );
};

export default Home;