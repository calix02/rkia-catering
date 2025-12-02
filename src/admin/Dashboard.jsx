import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import UpcomingEventsModal from "./components/UpcomingEventsModal";
import { useRef } from "react";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import BookingLineChart from "./components/BookingLineChart";
import ".././animate.css"
function Dashboard(){
    const showUpcomigEvent = useAnimatedToggle();
    const upcomingEventRef = useRef(null);
    return(
        <>
        {showUpcomigEvent.isVisible && (
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <UpcomingEventsModal  ref={upcomingEventRef} onAnimationEnd={showUpcomigEvent.handleEnd} onClose={() => showUpcomigEvent.setAnimation("fade-out")} animate={showUpcomigEvent.animation}/>
            </div>
        )}

        <Sidebar/>
        <div className="bg-[#F6F3ED] w-full min-h-screen py-5 ">
            <div className="w-full flex px-10 justify-end">
                <div className="min-w-40 px-2 h-10 flex text-sm  justify-center items-center gap-2">
                    <span class="material-symbols-outlined">account_circle</span>
                    <span className="poppins-semibold ">My Account</span>
                </div>
            </div>
            <div className="lg:ml-60  px-8">
                <h1 className="poppins-bold text-2xl">Dashboard</h1>
                <div className="flex lg:flex-row mt-10 flex-col gap-5">
                    <Card title="Total Bookings" total="11"/>
                    <Card title="Total Request" total="18"/>
                    <Card title="Total Accounts" total="107"/>
                    <Card onClick={showUpcomigEvent.toggle} title="Upcoming Bookings" total="3"/>
                </div>
                <div className=" flex justify-center  py-5">
                    <BookingLineChart/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Dashboard;