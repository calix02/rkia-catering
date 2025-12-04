import Sidebar from "./components/Sidebar";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import RequestBooking from "./components/RequestBoooking";
import { useRef } from "react";
function Dashboard(){
    const book = useAnimatedToggle();
    const bookRef = useRef();
    return(
        <>
        {book.isVisible &&(
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <RequestBooking ref={bookRef} onAnimationEnd={book.handleEnd} animate={book.animation} onClose={()=> book.setAnimation("fade-out")}/>
            </div>
        )

        }
        <Sidebar/>
        <div className=" min-h-screen pb-5 w-full">
            <div className="ml-60 flex justify-end px-10">
                <button onClick={book.toggle} className="w-30  h-10 rounded-2xl mt-10 bg-sky-200 cursor-pointer">Book</button>
            </div>
        </div>


        </>
    );
}
export default Dashboard;