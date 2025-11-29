import { useState } from "react";
import "../../animate.css";
function Header({home,services,about}){
    const [showNavigation, setShowNavigation] = useState(false);
    const [animate, setAnimate] = useState("fade-up")
    
     const clickedMenu = () => {
        if (showNavigation) {
            setAnimate("fade-up");

            setTimeout(() => {
                setShowNavigation(false);
            }, 700); 
        } else {
            setAnimate("fade-down");
            setShowNavigation(true);
        }
    };
    return(
        <>
        <div className={`w-full flex items-center z-30 fixed top-0 justify-between lg:px-20 px-10 h-20 bg-[#F2EDE5] shadow-[2px_2px_2px_gray] ${showNavigation? "rounded-none" : "rounded-2xl" }`}>
            <div className=" flex h-20 items-center gap-2">
                <div className="playfair text-3xl">Logo</div>
                <h1 className="poppins-regular text-xl">RKIA Catering</h1>
            </div>
            <div className="">
                <nav className="hidden roboto text-sm lg:flex gap-15 ">
                    <a href={home}>Home</a>
                    <a href={services}>Services</a>
                    <a href={about}>About</a>
                    <button className="flex items-center gap-1"><i className="fa-solid fa-user"></i>Log In</button>
                </nav>   
                <button onClick={clickedMenu} className="lg:hidden block cursor-pointer">{showNavigation? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}</button>
            </div>
        </div>
        {showNavigation === true &&(
            <div className={`w-full ${animate} z-30 fixed top-20  py-5 rounded-b-2xl bg-[#F2EDE5] shadow-[2px_2px_2px_gray]`}>
             <nav className="roboto text-sm flex flex-col gap-5 px-10 ">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">About</a>
                <button className="flex items-center gap-1"><i className="fa-solid fa-user"></i>Log In</button>
            </nav>   
        </div>
       

        )}
        
        </>
    );
}
export default Header;