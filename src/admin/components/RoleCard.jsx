import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
const RoleCard = React.forwardRef(({animate, onAnimationEnd, onClose,fetchData, userId},ref) =>{
     
    const [role, setRole] = useState("");
    const handleUpdate = async (userId) => {
                const confirm = await Swal.fire({
                    title: "Update Role?",
                    text: "Are you sure?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#8FA584",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Update Role",
                });
        
                if (!confirm.isConfirmed) return;
        
                const res = await fetch("http://localhost/backend/api/crud.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        id: userId, 
                        action: "update-account" ,
                        role: role,

                    })
                });
        
                const result = await res.json();
        
                if (result.message ) {
                    Swal.fire("Success", result.message, "success");
                    fetchData(); 
                }
        };

    return(
        <div ref={ref} onAnimationEnd={onAnimationEnd} className={`${animate} px-5 relative w-100 min-h-80 pb-5 overflow-hidden rounded-2xl bg-[#F6F3ED]`}>
            <div onClick={onClose}  className="flex justify-center -right-2 -top-2 absolute items-center w-12 h-12 cursor-pointer  transition duration-300   rounded-lg bg-[#8FA584]"><i className="fa-solid fa-x"></i></div>
            <h1 className="playfair text-xl mt-5">Logo</h1>
            <div className="flex justify-center px-10 pb-5 mt-10 bg-white rounded-2xl flex-col">
                <div className=" flex  -mt-8 justify-center">
                    <i className="fa-solid fa-circle-user text-[#84967d] text-7xl"></i>
                </div>
                <h1 className="playfair text-2xl text-center mt-3">Update Role</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleUpdate(userId);
                    onClose();
                    }} className="poppins-regular mt-5 text-sm flex flex-col gap-5">
                   
                    <div>
                        <label className="text-md poppins-semibold" htmlFor="">Username</label><br />
                        <select onChange={(e)=>setRole(e.target.value)} className="w-full mt-2 shadow-[2px_2px_2px_gray]  px-3 text-sm border h-10 rounded-xl border-[#e0e0e0]" name="" id="">
                            <option value="">--Select role--</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>

                        </select>
                    </div>
                    <div className="">
                        <button  type="submit"  className="w-full poppins-semibold text-sm cursor-pointer bg-[#8FA584] h-10 rounded-xl shadow-[2px_2px_2px_gray]">Update Role</button>
                    </div>
                </form>
            </div>
        </div>
    );
})
 export default RoleCard;