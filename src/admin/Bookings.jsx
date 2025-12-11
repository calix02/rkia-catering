import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
function Bookings(){
    const [data, setData] = useState([]);
    const fetchData = async () =>{
        try{
            const res = await fetch("http://localhost/backend/api/get_booking_approved.php");
            const json = await res.json();
            setData(json);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        fetchData();
    },[])

    const handleComplete = async (bookingId) => {
            const confirm = await Swal.fire({
                title: "Booking Complete?",
                text: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#8FA584",
                cancelButtonColor: "#d33",
                confirmButtonText: "Complete Booking",
            });
    
            if (!confirm.isConfirmed) return;
    
            const res = await fetch("http://localhost/backend/api/crud.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    id: bookingId, 
                    action: "complete" 
                })
            });
    
            const result = await res.json();
    
            if (result.message ) {
                Swal.fire("Success", result.message, "success");
                fetchData(); 
            }
    };

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
                <h1 className="poppins-bold text-2xl">Bookings</h1>
                <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                    <table className=" poppins-regular w-full  text-center">
                        <thead className="bg-[#8FA584] ">
                            <tr className="">
                                <th>Name</th>
                                <th>Event Name</th>
                                <th>Location</th>
                                <th>Package</th>
                                <th className="py-6">Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                            data.map((b, id) =>(
                            <tr key={id}>
                                <td>{b.full_name}</td>
                                <td>{b.event_name}</td>
                                <td>{b.event_location}</td>
                                <td>{b.package_name}</td>
                                <td className="py-6">{b.event_date}</td>
                                <td>
                                    <div onClick={()=>handleComplete(b.booking_id)} className="flex gap-2 text-md justify-center cursor-pointer items-center text-green-600 ">
                                        <p>Done</p>
                                        <i className="fa-solid fa-calendar-check"></i>
                                    </div>
                                </td>
                             </tr>

                            ))
                            ):(
                            <tr colspan="6" className="text-xl poppins-semibold text-gray-400 py-10">
                                <td>No Approved Bookings</td>
                            </tr>
                            )}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
       
    );
}
export default Bookings;