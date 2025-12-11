import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
const UpdateEventCard = React.forwardRef(({animate, onAnimationEnd, onClose, logIn},ref) =>{

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("event_name", eventName);
        formData.append("event_description", description);
        formData.append("image", document.getElementById("event-image").files[0]);

        const res = await fetch("http://localhost/backend/api/add_event.php", {
        method: "POST",
        body: formData,
        credentials: "include",
        });

        const result = await res.text();
        console.log(result);
        Swal.fire("Event Created!", result.message, "success");
        onClose();

    };

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 min-h-120 pb-5 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <h1 className="playfair text-xl mt-5">Logo</h1>
            <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                <div className=" flex  -mt-8 justify-center">
                    <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                </div>
                <h1 className="playfair text-2xl text-center mt-3">Update Event</h1>
                <form onSubmit={handleSubmit}  className="poppins-regular mt-5 text-sm flex flex-col gap-5">
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Event Name</label><br />
                        <input className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" value={eventName} onChange={(e)=> setEventName(e.target.value)} placeholder="Event Name" type="text" />
                    </div>
                      <div>
                        <label className="text-md poppins-semibold" htmlFor="">Description</label><br />
                        <textarea className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" placeholder="Description" onChange={(e) => setDescription(e.target.value)} name="" id=""></textarea>
                    </div>
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Event Image</label><br />
                        <div className="w-full h-20 flex flex-col justify-center items-center rounded-2xl border">
                            <p>Upload Image</p>
                            <span>
                                <input id="event-image" className="w-30 mt-2  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0] "  placeholder="Username" type="file" />
                            </span>
                        </div>
                    </div>
                    
                    <div className="">
                        <button  type="submit"  className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">Add Event</button>
                    </div>
                </form>
            </div>
        </div>
    );
})
 export default UpdateEventCard;