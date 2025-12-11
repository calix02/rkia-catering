import { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import useAnimatedToggle from "../hooks/useAnimatedToggle";
import RoleCard from "./components/RoleCard";
import Swal from "sweetalert2";
function Accounts(){
    const [data, setData] = useState([]);
    const [selectedId , setSelectedId] = useState(null);
    const fetchData = async () =>{
           try{
               const res = await fetch("http://localhost/backend/api/get_accounts.php");
               const json = await res.json();
               setData(json);
           }catch(err){
               console.log(err);
           }
       }
       useEffect(() =>{
           fetchData();
       },[])
    const handleDelete = async (userId) => {
        const confirm = await Swal.fire({
            title: "Delete Account?",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8FA584",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete Account"
        });

        if (!confirm.isConfirmed) return;
        
        const res = await fetch("http://localhost/backend/api/crud.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: userId, 
                action: "delete-account" 
            })
        });
        
        const result = await res.json();
        
        if (result.message ) {
            Swal.fire("Success", result.message, "success");
            fetchData(); 
        }
    };
    const updateRole = useAnimatedToggle();
    const updateRef = useRef(null);
  
return(
        <>
        {updateRole.isVisible &&(
            <div className="inset-0 z-40 fixed flex justify-center items-center pointer-events-auto bg-[#00000072]">
                <RoleCard userId={selectedId} fetchData={fetchData} ref={updateRef} onAnimationEnd={updateRole.handleEnd} animate={updateRole.animation} onClose={()=> updateRole.setAnimation("fade-out")}/>
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
            <div className="ml-60  px-8">
                <h1 className="poppins-bold text-2xl">Accounts</h1>
                 <div className="mt-10 border border-[#e0e0e0] overflow-hidden rounded-2xl shadow-[2px_2px_2px_gray]">
                    <table className=" poppins-regular w-full text-center h-55">
                        <thead className="bg-[#8FA584]">
                            <tr className="h-18">
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((a, id) =>(
                            <tr key={id}>
                                <td>{a.full_name}</td>
                                <td>{a.username}</td>
                                <td>{a.role}</td>   
                                <td className="py-4">
                                    <div className="flex justify-center gap-2">
                                        <button onClick={() =>{updateRole.toggle(); setSelectedId(a.user_id);}} className="w-10 h-10 flex items-center justify-center rounded-full">
                                            <i className="fa-solid fa-pen-to-square text-green-500 fa-lg"></i>
                                        </button>
                                        <button onClick={ ()=>handleDelete(a.user_id)} className="w-10 h-10 flex items-center justify-center rounded-full ">
                                            <i className="fa-solid fa-trash text-red-500 fa-lg"></i>
                                        </button>
                                    </div>
                                </td>
                             </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
       
    );
}
export default Accounts;