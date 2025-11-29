import Header from "./components/Header";
import Background from "./../assets/background.svg";
import Wedding from ".././assets/wedding.jpg";
import Baptism from ".././assets/baptism.png";

import CardEvent from "./components/CardEvent";
function LandingPage(){
    return(
        <>
        <Header home="#home" services="#services" about="services"/>
        <section id="home" className="w-full bg-[url(/src/assets/background.svg)] bg-cover flex flex-col  h-screen">

            <div className="w-full h-screen flex flex-col lg:justify-center lg:py-0 py-20 lg:mt-0 mt-30  z-10 px-15 ">
                <p className="roboto lg:text-2xl text-lg lg:text-start text-center">Let’s bring your dream event to life .</p>
                <h1 className="poppins-semibold text-center lg:text-start lg:text-6xl text-4xl lg:w-180 lg:mt-5  lg:leading-15 leading-10"><span className="text-[#6E856A]">Crafting</span> magical moments</h1>
                <p className="poppins lg:text-start text-center lg:mt-10  lg:w-160 lg:text-lg text-sm">From intimate gatherings to grand celebrations, we design decorations that truly impress.Let’s talk about your event today.</p>
                <div className="flex justify-start px-5 gap-5 mt-5">
                    <button className="w-35 h-10 poppins-semibold bg-[#8FA584] cursor-pointer shadow-[2px_2px_1px_black] rounded-2xl  hover:scale-107 transition duration-300">Get Started</button>
                    <button className="w-35 h-10 bg-white text-[#51754a] poppins-semibold cursor-pointer rounded-2xl shadow-[2px_2px_2px_black] hover:scale-107 transition duration-300">Book Now</button>
                </div>
            </div>

        </section>
         <section id="services" className="w-full px-10 bg-[#F6F3ED] min-h-screen pb-3 pt-30">
            <h1 className="playfair text-4xl text-center "><span className="text-[#5c7151]">Got an event coming up?</span> Let’s decorate it beautifully!</h1>
            <div className=" mt-5 grid grid-cols-4 gap-5  py-5 ">
                <CardEvent picture={Wedding} event="Wedding Event" tagline="“Crafting timeless wedding designs that speak the language of love.”"/>    
                <CardEvent picture={Wedding} event="Birthday Event" tagline="“From simple to stunning—we design birthdays you’ll never forget.”"/>    
                <CardEvent picture={Wedding} event="Baptismal Event" tagline="“Honoring your child’s special moment with thoughtful decorations.”"/>    
                <CardEvent picture={Wedding} event="Family Gathering Event" tagline="“Beautiful setups that make every family moment feel extra special.”"/>    
            </div>
            <div className="w-full h-30 rounded-2xl bg-white shadow-[2px_2px_2px_black] relative">
              

            </div>

        </section>
         <section id="about" className="w-full bg-white h-screen">

        </section>
        </>
    );
}
export default LandingPage;