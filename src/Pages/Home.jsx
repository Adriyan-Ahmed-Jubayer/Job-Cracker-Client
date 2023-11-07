import Banner from "../Components/Home/Banner";
import ChooseUs from "../Components/Home/ChooseUs";
import Clients from "../Components/Home/Clients";
import HomeJobs from "../Components/Home/HomeJobs";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <>
            <section className="container mx-auto mb-[40px] md:mb-[80px] lg:mb-[130px] mt-8 md:mt-14 lg:mt-20 xl:mt-28">
                <Banner></Banner>
            </section>
            <section className="mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <HomeJobs></HomeJobs>
            </section>
            <section  className="container mx-auto mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <ChooseUs></ChooseUs>
            </section>
            <section  className="container mx-auto mb-[40px] md:mb-[80px] lg:mb-[130px]">
                <Clients></Clients>
            </section>
        </>
    );
};

export default Home;