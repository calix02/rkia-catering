import Sidebar from "./components/Sidebar";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
function BookingStatus() {
    
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const[userId, setUserId] = useState(user.user_id);

          useEffect(() => {
            if (!userId) return; 
        
            const fetchData = async () => {
              try {
                const res = await fetch("http://localhost/backend/api/get_booking_user.php", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ userId: userId }),
                });
        
                const json = await res.json();
                setData(json);
                console.log(json);
              } catch (err) {
                console.log(err);
              }
            };
        
            fetchData();
          }, [userId]); // run every time id change
    return(
        <>
        <Sidebar/>
        <div className="h-screen w-full">
            <div className="lg:ml-60 flex justify-between  items-center pt-10 px-10">
                <h1 className="poppins-semibold text-2xl">Book Status</h1>
            </div>
            
            <div className="ml-60  px-8">
                <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                    <table className=" poppins-regular w-full  text-center">
                        <thead className="bg-[#8FA584] ">
                            <tr className="">
                                <th>Event Name</th>
                                <th>Location</th>
                                <th>Package</th>
                                <th className="py-6">Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                            data.map((b, id) =>(
                            <tr key={id}>
                                <td>{b.event_name}</td>
                                <td>{b.event_location}</td>
                                <td>{b.package_name}</td>
                                <td className="py-6">{b.event_date}</td>
                                <td>{b.booking_status}</td>
                                
                             </tr>

                            ))
                            ):(
                            <tr  className="text-xl poppins-semibold text-gray-400 py-10">
                                <td colSpan="6" className="py-10">No Bookings Yet</td>
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
export default BookingStatus;