import Sidebar from "./components/Sidebar";
import Wedding from "../assets/weddingVideo.mp4"
import { useState } from "react";
function Events(){
    const [type, setType] = useState("Basic");
    return(
        <>
        <Sidebar/>
        <div className="bg-[#F6F3ED] w-full min-h-screen py-5 ">
            <div className="w-full flex px-10 justify-end">
                <div className="min-w-40 px-2 h-10 flex text-sm  justify-center items-center gap-2">
                    <span class="material-symbols-outlined">account_circle</span>
                    <span className="poppins-semibold ">My Account</span>
                </div>
            </div>
            <div className="ml-60  px-8">
                <h1 className="poppins-bold text-2xl">Events</h1>
                <div className="flex justify-end">
                    <button className="h-10 w-40 bg-white rounded-2xl shadow-[2px_2px_2px_black] poppins-semibold text-sm text-center">Add Event </button>
                </div>
                 
            </div>
        </div>
        </>
       
    );
}
export default Events;