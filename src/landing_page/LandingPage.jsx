import Header from "./components/Header";
import Background from "./../assets/background.svg";
import Luxe from ".././assets/luxe.svg";
import Baptism from ".././assets/baptism.png";
import WeddingPackage from "./components/WeddingPackage";
import BirthdayPackage from "./components/BirthdayPackage";
import BaptismalPackage from "./components/BapstimalPackage";
import FamilyPackage from "./components/FamilyPackage";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import Typewriter from "./components/TypeWriter";
import { useRef, useState } from "react";
import "./../animate.css"
import "./../style.css"

import CardEvent from "./components/CardEvent";
function LandingPage(){
    const events = {
        event1 : [{
            picture: Luxe,
            eventName : "Wedding Event",
            tagline: "“Crafting timeless wedding designs that speak the language of love.”",

        }],
         event2 : [{
            picture: Luxe,
            eventName : "Birthday Event",
            tagline: "“From simple to stunning—we design birthdays you’ll never forget.”",

        }],
         event3 : [{
            picture: Luxe,
            eventName : "Baptismal",
            tagline: "“Honoring your child’s special moment with thoughtful decorations.”",

        }],
         event4 : [{
            picture: Luxe,
            eventName : "Family Gathering",
            tagline: "“Beautiful setups that make every family moment feel extra special.”",

        }],


    }
    const [selectedEvent, setSelectedEvent] = useState(null);

    const showPackage = useAnimatedToggle();
    const weddingRef = useRef(null);
    const birthdayRef = useRef(null);
    const baptismalRef = useRef(null);
    const familyRef = useRef(null);


    return(
        <>
        {showPackage.isVisible && (
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                {selectedEvent === "Wedding Event" &&(
                <WeddingPackage ref={weddingRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
                )}
                 {selectedEvent === "Birthday Event" &&(
                <BirthdayPackage ref={birthdayRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
                )}
                {selectedEvent === "Baptismal" &&(
                <BaptismalPackage ref={baptismalRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
                )}
                {selectedEvent === "Family Gathering" &&(
                    <FamilyPackage ref={familyRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
                )}
            </div>
        )}
        <Header home="#home" services="#services" about="#about"/>
        <section id="home" className="w-full bg-[url(/src/assets/background.svg)] bg-cover flex flex-col  h-screen">

            <div className="w-full h-screen flex flex-col lg:justify-center lg:py-0 py-20 lg:mt-0 mt-30  z-10 lg:px-15 px-5 ">
                <p className="roboto lg:text-2xl text-lg lg:text-start text-center">Let’s bring your dream event to life .</p>
                <h1 className="poppins-semibold text-center lg:text-start lg:text-6xl text-4xl lg:w-180 lg:mt-5  lg:leading-15 leading-13"><span className="text-[#6E856A]">Crafting</span> magical moments</h1>
                <Typewriter message="From intimate gatherings to grand celebrations, we design decorations that truly impress.Let’s talk about your event today"/>
                <div className="flex lg:justify-start justify-center px-5 gap-5 lg:mt-5 mt-10">
                    <button className="w-35 h-10 poppins-semibold bg-[#8FA584] cursor-pointer shadow-[2px_2px_1px_black] rounded-2xl  hover:scale-107 transition duration-300">Get Started</button>
                    <button className="w-35 h-10 bg-white text-[#51754a] poppins-semibold cursor-pointer rounded-2xl shadow-[2px_2px_2px_black] hover:scale-107 transition duration-300">Book Now</button>
                </div>
            </div>

        </section>
         <section id="services" className="w-full px-10 bg-[#F6F3ED] min-h-screen pb-3 pt-30">
            <h1 className="playfair text-4xl text-center "><span className="text-[#6E856A]">Got an event coming up?</span> Let’s decorate it beautifully!</h1>
            <div className=" mt-5  overflow-x-scroll hide-scrollbar  gap-5  py-5 ">
                <p className="flex  items-center gap-2 roboto text-sm lg:hidden"><i className="fa-solid fa-arrow-left"></i>Swipe to left to see more</p>
                <div className="lg:w-full w-400 gap-5 grid grid-cols-4 ">
                    {Object.values(events).map((item, id)=>(
                        <CardEvent
                        toggle={() => {
                            setSelectedEvent(item[0].eventName)
                            showPackage.toggle()}} 
                        key={id}
                        picture={item[0].picture}
                        event={item[0].eventName}
                        tagline={item[0].tagline} />
                    ))}
                </div>   
            </div>
            <div className=" mt-5  lg:px-30 px-5 w-full">
                <h1 className="playfair lg:text-2xl text-lg  text-black pb-4  text-center">Every event deserves to feel unforgettable.Let us bring your vision to life with designs crafted to match your story, your style, and your celebration.</h1>
            </div>
          
        </section>
         <section id="about" className="w-full h-screen flex   bg-[#F6F3ED]">
            
            <div className="w-full h-screen p-30">
              
            </div>
            <div className="w-full poppins-medium h-screen flex flex-col gap-5 items-center justify-center px-15 text-justify ">
                <p className=""><span className="text-[#6E856A]">RKIA </span>Catering & Events is dedicated to making every celebration beautiful, meaningful, and memorable.What started as a simple love for decorating has grown into a full-service event styling team trusted by families and couples for their most important occasions.</p>
                <p className="">We specialize in creating custom-designed setups—from romantic weddings and joyful birthdays to heartfelt baptisms and warm family gatherings.Every detail is thoughtfully planned, color-coordinated, and executed with care, ensuring your event feels uniquely yours.</p>
                <p className="text-md p">Our mission is simple: to bring your vision to life with creativity, elegance, and personalized service you can rely on.</p>
                <h1 className="poppins-bold  text-2xl mt-5">Get In Touch <span className="text-[#6E856A]">With Us</span></h1>
                <div className="">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                </div>

            </div>

        </section>
        </>
    );
}
export default LandingPage;