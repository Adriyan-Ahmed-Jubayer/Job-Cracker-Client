import { BsStack, BsSearch, BsBookHalf, BsShield } from 'react-icons/bs';

const ChooseUs = () => {
    return (
        <>
            <div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="w-9/12 md:w-7/12 xl:w-5/12 mx-auto text-center space-y-3 lg:space-y-6 mb-5 md:mb-10 xl:mb-14">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-design">WHY CHOOSE US</h4>
                    <h1 className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px] font-bold">Why <span className="text-design">Choose</span> Us</h1>
                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium ">At our job website, we prioritize delivering an exceptional customer experience that sets us apart from the competition. Here are some reasons why our customers love.</p>
                </div>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 lg:mx-4 xl:mx-0">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex-1 lg:flex-[2]">
                        <img className="bg-teal-100 bg-opacity-50 rounded-lg w-full" src="https://i.ibb.co/L0ZjTr3/1-removebg-preview.png" alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=" flex-1 lg:flex-[3] grid grid-cols-1 md:grid-cols-2 gap-5 mx-4 lg:mx-0">
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7 bg-teal-100 dark:bg-slate-900 dark:border-teal-500 dark:border-2 duration-700 hover:bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] rounded-xl text-teal-500 hover:text-white bg-opacity-60 space-y-2">
                            <BsStack className='text-4xl lg:text-6xl '></BsStack>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Job Opportunities</h1>
                            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7 bg-teal-100 dark:bg-slate-900 dark:border-teal-500 dark:border-2 duration-700 hover:bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] rounded-xl text-teal-500 hover:text-white bg-opacity-60 space-y-2">
                            <BsSearch className='text-4xl lg:text-6xl '></BsSearch>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Search and Filtering</h1>
                            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Our powerful search and filtering options allow users to refine their job searches based on specific criteria such as location</p>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7 bg-teal-100 dark:bg-slate-900 dark:border-teal-500 dark:border-2 duration-700 hover:bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] rounded-xl text-teal-500 hover:text-white bg-opacity-60 space-y-2">
                            <BsBookHalf className='text-4xl lg:text-6xl '></BsBookHalf>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Resources and Advice</h1>
                            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">Resources and Advice In addition to job listings, we offer a wealth of career resources and advice. Our blog, articles, and guides cover a wide.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="p-7 bg-teal-100 dark:bg-slate-900 dark:border-teal-500 dark:border-2 duration-700 hover:bg-gradient-to-l from-[#0FCFEC] to-[#19D3AE] rounded-xl text-teal-500 hover:text-white bg-opacity-60 space-y-2">
                            <BsShield className='text-4xl lg:text-6xl '></BsShield>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Trust and Reliability</h1>
                            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 font-medium">We have established a reputation for trust and reliability in the industry. Our commitment to quality job listings, data security.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;