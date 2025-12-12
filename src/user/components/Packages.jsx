import React from "react";
import Wedding from "../../assets/weddingVideo.mp4";
import { AuthContext } from "../../AuthContext";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import "../../style.css";
const Packages = React.forwardRef(({animate, onAnimationEnd, onClose, login, id},ref) =>{
    const [type, setType] = useState("Basic");
    const [data, setData] = useState([]);

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
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: data.message,
                    confirmButtonColor: "#8FA584",
                });
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
  
        
    useEffect(() => {
    if (!id) return; // don't fetch if no id

    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost/backend/api/get_packages.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventId: id }),
        });

        const json = await res.json();
        setData(json);
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]); // run every time id changes


    const clickedBasic = () =>{
        setType("Basic");
    }
     const clickedPremium = () =>{
        setType("Premium");
    }
     const clickedLuxe = () =>{
        setType("Luxe");
    }

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`lg:w-220 w-100 px-5 max-h-170 pb-5 pt-2 overflow-y-scroll hide-scrollbar relative ${animate} rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <div className=" flex justify-start gap-2 px-10">
                <h1 className="poppins-regular text-xl mt-2">RKIA Catering</h1>
            </div>
            <div  className="w-full flex lg:flex-row flex-col gap-3">
            <div className="w-full flex flex-col items-center justify-center">
                <img  src={`http://localhost/backend/uploads/events/${data[0]?.image}`}  className="flex justify-center h-80  items-center rounded-2xl" alt="" />
                <h1 className="playfair text-xl text-center">{data[0]?.event_name}</h1>
            </div>
           
            <div className="w-full min-h-60 py-3 poppins-regular overflow-y-scroll hide-scrollbar text-sm lg:p-5">

                <div  className="package min-h-68 w-full mt-2 border-b-4 bg-white border border-r-2 border-[#e0e0e0] shadow-[2px_2px_2px_gray] p-5  flex flex-col gap-2">
                    {data.map((p, id) =>(
                        <div key={id}>
                            <h1 className="playfair text-xl">Package {id+1}</h1>
                            <h1 className="poppins-semibold text-md">{ p.package_name}</h1>
                            <p  className="flex items-center gap-2 "><i className="fa-solid fa-check  text-[#6E856A]"></i>{p.description}</p>
                            <p  className="flex items-center gap-2 mb-3 "><i className="fa-solid fa-check  text-[#6E856A]"></i> Price: {p.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <div className="min-h-30 w-full text-sm px-5 poppins-regular">
                <form onSubmit={handleRequest} className="flex flex-col gap-3 w-full " action="">
                    <div className="w-full flex gap-8">
                        <div className="w-full flex flex-col gap-3">
                            <div className="w-full">
                                <label htmlFor="">Select Package</label><br />
                                <select onChange={(e) => setPackageID(e.target.value)}  className="w-full h-10 bg-white border border-[#e0e0e0] shadow-[2px_2px_2px_gray] rounded-md px-3" name="" id="">
                                    <option value="">--Select Package--</option>
                                    {data.map((p, id) =>(
                                        <option key={id} value={p.package_id}>Package {id + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="">Location</label><br />
                                <input placeholder="Event Location" onChange={(e) => setEventLocation(e.target.value)} className="h-10 bg-white border w-full border-[#e0e0e0]  shadow-[2px_2px_2px_gray] rounded-md px-3" type="text" />
                            </div>
                        </div>
                         <div className="w-full flex flex-col gap-3">
                        <div className="w-full">
                            <label htmlFor="">Event Date</label><br />
                            <input onChange={(e) => setDate(e.target.value)}  className="w-full bg-white h-10 border border-[#e0e0e0] shadow-[2px_2px_2px_gray] rounded-md px-3"  type="date" />
                                
                        </div>
                        <div className="w-full">
                            <label htmlFor="">Event Time</label><br />
                            <input onChange={(e) => setTime(e.target.value)} className="w-full bg-white h-10 border border-[#e0e0e0] shadow-[2px_2px_2px_gray] rounded-md px-3"  type="time" />
                        </div>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit" className="w-full h-10 rounded-2xl bg-[#8FA584] cursor-pointer">Book Now</button>
                    </div>
                </form>
            </div>



        </div>
    );
})
export default Packages;