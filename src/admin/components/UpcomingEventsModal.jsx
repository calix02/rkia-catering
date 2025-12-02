import React from "react";
import "../../style.css";
const UpcomingEventsModal = React.forwardRef(({animate, onAnimationEnd, onClose},ref) =>{
    
    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`lg:w-220 w-100 px-5 max-h-160 py-3 overflow-y-scroll hide-scrollbar relative ${animate} rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <div className=" flex justify-start gap-2 px-10">
                <h1 className="poppins-regular text-xl mt-2">Upcoming Events</h1>
            </div>
            <div  className="w-full flex flex-col px-5">
                <div className="w-full h-30 relative rounded-lg">
                    <h1 className="absolute right-2 top-2 poppins-regular text-sm">December 9, 2025</h1>

                    <h1>Birthday Party</h1>
                    <h2>Package: Luxe</h2>
                    <h2></h2>

                </div>
                
            </div>
        </div>
    );
})
export default UpcomingEventsModal;