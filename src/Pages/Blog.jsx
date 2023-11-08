import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <>
        <Helmet>
            <title>Job Cracker | BLOGS</title>
        </Helmet>
            <article className="my-[40px] md:my-[80px] lg:my-[130px] lg:container lg:mx-auto mx-4 md:mx-7">
                <h1 className=" text-xl md:text-2xl font-bold">What is an access token and refresh token? How do they work and where should we
                    store them on the client-side?</h1>
                <p className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Answer: </span>
                    Access tokens and refresh tokens are commonly used in authentication and authorization systems, They play a crucial role in ensuring the security and efficiency of user authentication and access to protected resources.Access tokens and refresh tokens work together to provide a secure and convenient way for users to access their data and services. The client application can use the access token to make requests to the resource server without asking the user to enter their credentials every time.
                </p>
                <p className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Access Token: </span>
                    An access token is a piece of data that allows a client application to access a protected resource, such as an API or a website, on behalf of a user.Once an access token expires, the client must request a new one if continued access to the resource is needed.
                </p>
                <p className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Refresh Token: </span>
                    A refresh token is a piece of data that allows a client application to obtain a new access token when the current one expires or becomes invalid.Refresh tokens are typically more securely stored, as they have a longer lifespan and are not meant to be used directly in API requests.
                </p>
                <p className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9">
                Access tokens and refresh tokens work together to provide a secure and convenient way for users to access their data and services. The client application can use the access token to make requests to the resource server without asking the user to enter their credentials every time. However, access tokens are usually short-lived and may expire or be revoked by the authorization server. In that case, the client application can use the refresh token to request a new access token from the authorization server without bothering the user. This way, the user can stay logged in for a longer period of time, while the access tokens are refreshed periodically to prevent unauthorized access.
                </p>
                <p  className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9">The best way to store access tokens and refresh tokens on the client-side depends on the type of the client application and the security risks involved. For web applications, it is recommended to store the tokens in the browser’s Cookies and not in local storage or memory</p>
                <h1 className=" text-xl md:text-2xl font-bold mt-10">What is express js? What is Nest JS ?</h1>
                <p  className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Answer: </span>Express JS and Nest JS are both popular web frameworks for building server-side applications with Node.js. They have some similarities and differences</p>
                <p  className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Express JS: </span>Express JS is a minimal and flexible framework that provides a set of core features for web and mobile applications, such as routing, middleware, error handling, and template engines. Express JS is unopinionated, meaning that it does not enforce any specific structure or convention for developing applications. Express JS allows developers to use any other libraries or tools they prefer, such as databases, authentication, or testing frameworks. Express JS is one of the most widely used Node.js frameworks and has a large and active community of developers and contributors</p>
                <p  className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9"><span className="text-lg font-bold text-black">Nest JS: </span>Nest JS is a progressive and scalable framework that builds on top of Express JS and adds more features and abstractions, such as modules, controllers, services, pipes, guards, interceptors, and decorators. Nest JS is inspired by Angular and uses TypeScript as its main language, but it also supports JavaScript. Nest JS is opinionated, meaning that it follows a specific architecture and design pattern for developing applications. </p>
                <h1 className=" text-xl md:text-2xl font-bold mt-10">Here's the explenation of my code :</h1>
                <p  className="text-[#777770] text-[14] md:text-[16px] mt-5 leading-9">I Managed the Code of my Job Cracker Website . At first I made the navbar and the footer with the following requirments of Assignment_Category_0003. After making the navbar and the footer I made the banner section then I implemented Login functionality and made a Login Page . After designing the login I created a new Project in Firebase and Implement the functionality to a Provider jsx page then I wrapped the whole project with the context. At first I created a function to registration and Login function then I copied the component of login page and made a register page and paste the copied component and make some changes then I used The Authentication Context and called the function of for register. After successfully complete the register functionality I implemented the login functionality in the same way of register just the difference is I called the login function from the Authentication context. I also implement a extra login system that is login with google. The system was applied for both pages. Then I was made the tab function . At First i wanna use the react tab but unfortunately i didn't understood the  functionality so that i was use the my own tab system and add a animation from Framer Motion Library. then I made a server side and implemented a api to get category wise data. Then after making the api I fetched the api and render the data in a card. After Completed the section successfully I made the All Jobs route and made another api to get title wise data and render the data in card. I also add a query in the api to get data.</p>
            </article>
        </>
    );
};

export default Blog;