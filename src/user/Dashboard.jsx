import Sidebar from "./components/Sidebar";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import RequestBooking from "./components/RequestBoooking";
import { useRef , useContext} from "react";
import { AuthContext } from "../AuthContext";

function Dashboard(){
    const book = useAnimatedToggle();
    const bookRef = useRef();
    const { user } = useContext(AuthContext);
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
            <div className="ml-60 flex justify-between  items-center pt-10 px-10">
                <h1 className="poppins-semibold text-2xl">Welcome {user.full_name}</h1>
                <button onClick={book.toggle} className="w-30  h-10 rounded-2xl  bg-sky-200 cursor-pointer">Book</button>
            </div>
        </div>


        </>
    );
}
export default Dashboard;