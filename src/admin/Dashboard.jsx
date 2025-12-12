import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import UpcomingEventsModal from "./components/UpcomingEventsModal";
import { useRef, useState, useEffect } from "react";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import BookingLineChart from "./components/BookingLineChart";
import CompletionRateChart from "./components/CompletionRateChart";
import ".././animate.css"
function Dashboard(){
    const showUpcomigEvent = useAnimatedToggle();
    const upcomingEventRef = useRef(null);
    const [data, setData] = useState([]);
    const [request, setRequest] = useState([]);
    const [accounts, setAccounts] = useState([]);

    
        const fetchData = async () =>{
            try{
                const res = await fetch("http://localhost/backend/api/get_total_booking.php");
                const json = await res.json();
                setData(json);
            }catch(err){
                console.log(err);
            }
        }
        const fetchRequest = async () =>{
           try{
               const res = await fetch("http://localhost/backend/api/get_total_request.php");
               const json = await res.json();
               setRequest(json);
           }catch(err){
               console.log(err);
           }
        }
        const fetchAccounts = async () =>{
           try{
               const res = await fetch("http://localhost/backend/api/get_total_accounts.php");
               const json = await res.json();
               setAccounts(json);
           }catch(err){
               console.log(err);
           }
        }

        useEffect(() =>{
            fetchData();
            fetchRequest();
            fetchAccounts();
        },[])

        
    return(
        <>
        {showUpcomigEvent.isVisible && (
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <UpcomingEventsModal  ref={upcomingEventRef} onAnimationEnd={showUpcomigEvent.handleEnd} onClose={() => showUpcomigEvent.setAnimation("fade-out")} animate={showUpcomigEvent.animation}/>
            </div>
        )}

        <Sidebar/>
        <div className="bg-white w-full min-h-screen py-5 ">
            <div className="w-full flex px-10 justify-end">
                <div className="min-w-40 px-2 h-10 flex text-sm cursor-pointer rounded-2xl bg-[#8FA584] border shadow-[2px_2px_2px_gray] justify-center items-center gap-2">
                    <span className="material-symbols-outlined">account_circle</span>
                    <span className="poppins-semibold ">My Account</span>
                </div>
            </div>
            <div className="lg:ml-60  px-8">
                <h1 className="poppins-bold text-2xl">Dashboard</h1>
                <div className="flex lg:flex-row mt-10 flex-col gap-5">
                    <Card title="Total Bookings" link="/admin/bookings" total={data.total}/>
                    <Card title="Total Request" link="/admin/book-request" total={request.total}/>
                    <Card title="Total Accounts" link="/admin/accounts" total={accounts.total}/>
                    <Card   title="Total Revenue" total="3"/>
                </div>
                <div className=" flex justify-center   py-5">
                    <BookingLineChart/>
                </div>
                <div className=" flex gap-5">
                    <div className="w-full bg-white shadow-[3px_3px_2px_gray]  border flex justify-center items-center rounded-2xl">
                        <CompletionRateChart/>
                    </div>
                    <div className="w-full bg-white shadow-[3px_3px_2px_gray]  border flex justify-center items-center rounded-2xl">
                        <CompletionRateChart/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Dashboard;