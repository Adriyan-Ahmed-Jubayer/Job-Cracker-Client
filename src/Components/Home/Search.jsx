import { HiMagnifyingGlass } from "react-icons/hi2"

const Search = () => {
    return (
        <>
            <form>
                <div className="flex justify-center relative">
                    <HiMagnifyingGlass className="absolute left-8 md:left-3 bottom-1/3 top-1/3"></HiMagnifyingGlass>
                    <input className="py-2.5 md:py-3 px-10 md:px-8 lg:px-10 rounded-tl-[4px] rounded-bl-[4px] w-9/12 lg:w-full bg-transparent text-xs md:text-sm lg:text-base md:mx-0 border-[#65D5CF] focus:border-2 border focus:outline-none font-medium" type="text" name="" placeholder="Enter Your Job's Name " required />
                    <button className="bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE]  py-2 md:py-3 px-3 md:px-6 lg:px-9 text-white font-bold text-xs md:text-sm  rounded-tr-[4px] rounded-br-[4px] ">SEARCH</button>
                </div>
            </form>
        </>
    );
};

export default Search;