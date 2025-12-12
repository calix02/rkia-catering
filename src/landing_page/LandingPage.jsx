import Header from "./components/Header";
import Background from "./../assets/background.svg";
import Designer from "./../assets/designer.png";
import Luxe from ".././assets/luxe.svg";
import Wedding from ".././assets/wedding.png";
import Birthday from ".././assets/birthday2.png";
import Baptismal from ".././assets/baptismal1.png";
import FamilyPic from ".././assets/family.jpg";
import SchoolPic from ".././assets/school.jpg";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Baptism from ".././assets/baptism.png";
import WeddingPackage from "./components/WeddingPackage";
import BirthdayPackage from "./components/BirthdayPackage";
import BaptismalPackage from "./components/BapstimalPackage";
import FamilyPackage from "./components/FamilyPackage";
import SchoolPackage from "./components/SchoolPackage";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import Typewriter from "./components/TypeWriter";
import { useRef, useState } from "react";
import "./../animate.css"
import "./../style.css"

import CardEvent from "./components/CardEvent";
function LandingPage(){
    const events = {
        event1 : [{
            picture: Wedding,
            eventName : "Wedding Event",
            tagline: "“Crafting timeless wedding designs that speak the language of love.”",

        }],
         event2 : [{
            picture: Birthday,
            eventName : "Birthday Event",
            tagline: "“From simple to stunning—we design birthdays you’ll never forget.”",

        }],
         event3 : [{
            picture: Baptismal,
            eventName : "Baptismal",
            tagline: "“Honoring your child’s special moment with decorations.”",

        }],
         event4 : [{
            picture: FamilyPic,
            eventName : "Family Gathering",
            tagline: "“Beautiful setups that make every family moment feel extra special.”",

        }],
         event5 : [{
            picture: SchoolPic,
            eventName : "School Event",
            tagline: "“Beautiful setups that make every family moment feel extra special.”",

        }],


    }
    const [selectedEvent, setSelectedEvent] = useState(null);
    const showLogIn = useAnimatedToggle();
    const logInRef = useRef(null);
    const showSignUp = useAnimatedToggle();
    const signUpRef = useRef(null);

    const showPackage = useAnimatedToggle();
    const weddingRef = useRef(null);
    const birthdayRef = useRef(null);
    const baptismalRef = useRef(null);
    const familyRef = useRef(null);
    const schoolRef = useRef(null);

    return(
        <>
        {showPackage.isVisible && (
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                {selectedEvent === "Wedding Event" &&(
                <WeddingPackage login={showLogIn.toggle} ref={weddingRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
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
                {selectedEvent === "School Event" &&(
                    <SchoolPackage ref={schoolRef} onAnimationEnd={showPackage.handleEnd} onClose={() => showPackage.setAnimation("fade-out")} animate={showPackage.animation}/>
                )}
            </div>
        )}
        {showLogIn.isVisible &&(
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <LogIn ref={logInRef} signUp={showSignUp.toggle} onAnimationEnd={showLogIn.handleEnd} onClose={() => showLogIn.setAnimation("fade-out")} animate={showLogIn.animation}/>
            </div>

        )}
        {showSignUp.isVisible &&(
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <SignUp ref={signUpRef} logIn={showLogIn.toggle} onAnimationEnd={showSignUp.handleEnd} onClose={() => showSignUp.setAnimation("fade-out")} animate={showSignUp.animation}/>
            </div>


        )}
        <Header login={showLogIn.toggle} home="#home" services="#services" about="#about"/>
        <section id="home" className="w-full bg-[url(/src/assets/background.svg)] bg-cover flex flex-col  h-screen">

            <div className="w-full h-screen flex flex-col lg:justify-center lg:py-0 py-20 lg:mt-0 mt-30  z-10 lg:px-15 px-5 ">
                <p className="roboto lg:text-2xl text-lg lg:text-start text-center">Let’s bring your dream event to life .</p>
                <h1 className="poppins-semibold text-center lg:text-start lg:text-6xl text-4xl lg:w-180 lg:mt-5  lg:leading-15 leading-13"><span className="text-[#6E856A]">Crafting</span> magical moments</h1>
                <Typewriter message="From intimate gatherings to grand celebrations, we design decorations that truly impress. Let’s talk about your event today!"/>
                <div className="flex lg:justify-start justify-center px-5 gap-5 lg:mt-5 mt-10">
                  
                    <a href="#services" className="w-35 h-10 poppins-semibold bg-[#8FA584] justify-center flex items-center cursor-pointer shadow-[2px_2px_1px_black] rounded-2xl  hover:scale-107 transition duration-300">Get Started</a>
                  
                    <button onClick={showLogIn.toggle} className="w-35 h-10 bg-white text-[#51754a] poppins-semibold cursor-pointer rounded-2xl shadow-[2px_2px_2px_black] hover:scale-107 transition duration-300">Book Now</button>
                </div>
            </div>

        </section>
         <section id="services" className="w-full px-10 bg-[#F6F3ED] min-h-screen pb-3 pt-30">
            <h1 className="playfair text-4xl text-center "><span className="text-[#6E856A]">Got an event coming up?</span> Let’s decorate it beautifully!</h1>
            <div className=" mt-5  overflow-x-scroll hide-scrollbar  gap-5  py-5 ">
                <p className="flex  items-center gap-2 roboto text-sm lg:hidden"><i className="fa-solid fa-arrow-left"></i>Swipe to left to see more</p>
                <div className="lg:w-full w-400 gap-5 grid grid-cols-5 ">
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
         <section id="about" className="w-full min-h-screen pb-5 flex lg:flex-row flex-col   bg-[#F6F3ED]">
            
            <div className="w-full  h-screen flex flex-col justify-center items-start gap-5 lg:mt-8 p-10">
                <h1 className="poppins-semibold text-2xl">What is <span className="text-[#6E856A]">RKIA</span> Catering and Event?</h1>
                <div id="about-box" className="w-150 bg-white bg-[url(assets\wedding2.png)] bg-cover shadow-[2px_3px_2px_gray] h-130 "></div>
            </div>
            <div className="w-full poppins-medium h-screen lg:text-md  flex flex-col gap-8  items-center lg:justify-center px-15 text-justify ">
                <p className="lg:mt-20"><span className="text-[#6E856A]">RKIA </span>Catering & Events is dedicated to making every celebration beautiful, meaningful, and memorable.What started as a simple love for decorating has grown into a full-service event styling team trusted by families and couples for their most important occasions.</p>
                <p className="">We specialize in creating custom-designed setups—from romantic weddings and joyful birthdays to heartfelt baptisms and warm family gatherings.Every detail is thoughtfully planned, color-coordinated, and executed with care, ensuring your event feels uniquely yours.</p>
                <p className="text-md p">Our mission is simple: to bring your vision to life with creativity, elegance, and personalized service you can rely on.</p>
                <div className="w-full bg-white py-2 rounded-xl shadow-[2px_2px_2px_gray] border border-[#e0e0e0] border-b-4 border-r-2  flex flex-col gap-5 text-2xl items-center justify-center">
                    <h1 className="poppins-bold  text-2xl ">Get In Touch <span className="text-[#6E856A]">With Us</span></h1>
                    <div className="flex gap-8">
                        <a className="h-10 w-10 hover:scale-107 hover:shadow-[2px_2px_2px_black] transition duration-300 rounded-lg bg-[#A9B79A] flex  items-center justify-center shadow-[2px_2px_2px_gray] border border-[#e0e0e0]" href=""><i className="fa-brands fa-facebook"></i></a>
                        <a className="h-10 w-10 hover:scale-107 hover:shadow-[2px_2px_2px_black] transition duration-300 rounded-lg bg-[#A9B79A] flex items-center justify-center  shadow-[2px_2px_2px_black]  border border-[#e0e0e0]" href=""><i className="fa-brands fa-instagram"></i></a>
                        <a className=" h-10 w-10 hover:scale-107 hover:shadow-[2px_2px_2px_black] transition duration-300 rounded-lg bg-[#A9B79A] flex items-center justify-center shadow-[2px_2px_2px_black]  border border-[#e0e0e0]" href=""><i className="fa-regular fa-envelope"></i></a>
                        <a className="h-10 w-10 hover:scale-107 hover:shadow-[2px_2px_2px_black] transition duration-300 rounded-lg flex items-center justify-center shadow-[2px_2px_2px_black] bg-[#A9B79A] border border-[#e0e0e0]" href=""><i className="fa-solid fa-phone"></i></a>
                    </div>
                   
                </div>

            </div>

        </section>
        </>
    );
}
export default LandingPage;