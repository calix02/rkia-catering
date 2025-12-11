import { useState , useContext} from "react";
import { AuthContext } from "../../AuthContext";
import React from "react";

const RequestBooking = React.forwardRef(({animate, onAnimationEnd, onClose},ref) =>{
    const { user } = useContext(AuthContext);

    const [packageID, setPackageID] = useState("");
    const [userID, setUserID] = useState(user.user_id);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    
 


    const handleRequest = async (e) => {
        e.preventDefault();
        try{

            const res = await fetch("http://localhost/backend/api/add_booking.php", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                  packageID,
                  userID : userID,
                  date,
                  time,
                  eventLocation
                })
            });
       
            const data = await res.json();
            if (data.message) {
                alert(data.message);
                setPackageID("");
                setUserID(""); 
                setDate("");
                setTime("");
                setEventLocation("");
                onClose();
            } else {
                alert(data.error); 
            }
        }catch(err){
            console.error(err);
            alert("Something went wrong. Check console.");
        }
    };
  
    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 min-h-120 pb-5 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <h1 className="playfair text-xl mt-5">Logo</h1>
            <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                <div className=" flex  -mt-8 justify-center">
                    <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                </div>
                <h1 className="playfair text-2xl text-center mt-3">Book Event</h1>
                <form  onSubmit={handleRequest} className="poppins-regular mt-5 text-sm flex flex-col gap-5">

                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">PackageId</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" onChange={(e) => setPackageID(e.target.value)} value={packageID}  placeholder="Package Id" type="text" />
                    </div>
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Date</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" onChange={(e) => setDate(e.target.value)} value={date}   type="date" />
                    </div>
                    <div className="">
                        <label className="text-md poppins-semibold" htmlFor="">Time</label><br />
                        <input className="w-full shadow-[2px_2px_2px_gray] mt-2 px-3 text-sm border h-10 rounded-xl border-[#e0e0e0] " onChange={(e) => setTime(e.target.value)} value={time}   type="time" />
                    </div>
                    <div className="">
                        <label className="text-md poppins-semibold" htmlFor="">Location</label><br />
                        <input className="w-full shadow-[2px_2px_2px_gray] mt-2 px-3 text-sm border h-10 rounded-xl border-[#e0e0e0] " onChange={(e) => setEventLocation(e.target.value)} value={eventLocation}  placeholder="Location" type="text" />
                    </div>
                    <div className="">
                        <button  type="submit"  className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
})
 export default RequestBooking;